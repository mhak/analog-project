import type { Query, LivePreviewQuery } from 'contentstack'

//import { Stack, Region } from 'contentstack'
import contentstack from 'contentstack'
import { addEditableTags } from '@contentstack/utils'


export type Options = {
  key: string
  token: string
  environment: string
  region: string
  branch: string
  preview: {
    enable: boolean
    host: string
    token: string
  }
}

if (typeof window !== 'undefined') {
  throw new Error(`The 'lib/contentstack' is not compatible with the browser`)
}

export class Contentstack {
  private options: Options
  private stack: contentstack.Stack

  constructor(options: Options) {
    this.options = options
    this.stack = this.create()
  }

  async find<T = Record<string, any>>(
    type: string,
    preview: LivePreviewQuery | null | undefined,
    builder: (query: Query) => Query,
  ): Promise<any> {
    try {
      this.setLivePreviewQuery(preview)

      const stack = this.stack.ContentType(type).Query()
      const query = builder(stack)
      const items = await query.find()

      this.setEditableTags(type, preview, items)

      return items.flat()
    } catch (error) {
      const traceId = crypto.randomUUID()

      //logger.error(error, `Contentstack (Trace ID '${traceId}'): Query for type '${type}'`)

      return { traceId }
    }
  }

  private setLivePreviewQuery(preview: LivePreviewQuery | null | undefined) {
    if (!this.options.preview.enable) return
    if (!preview?.live_preview || !preview?.content_type_uid) return

    this.stack.livePreviewQuery(preview)
  }

  private setEditableTags(type: string, preview: LivePreviewQuery | null | undefined, items: any[][]) {
    if (!this.options.preview.enable) return
    if (!preview?.live_preview || !preview?.content_type_uid) return

    addEditableTags(items[0][0], type, true)
  }

  private create() {
    return new contentstack.Stack({
      api_key: this.options.key,
      delivery_token: this.options.token,
      environment: this.options.environment,
      region: contentstack.Region.US,
      branch: this.options.branch,
      live_preview: {
        enable: this.options.preview.enable,
        host: this.options.preview.host,
        management_token: this.options.preview.token,
      },
    })
  }
}

export function createContentstackClient(options: Options) {
  return new Contentstack(options)
}