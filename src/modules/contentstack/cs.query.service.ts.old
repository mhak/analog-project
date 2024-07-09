import { Injectable, inject } from '@angular/core';
import { ContentstackService } from './contentstack.service';
import * as Utils from "@contentstack/utils";

interface RenderOption {
  [key: string]: (node: any, next: (children: any) => any) => any;
}

interface QueryParams {
  key: string;
  value: any;
}

@Injectable({ providedIn: 'root' })
export class ContentstackQueryService {
  private cs = inject(ContentstackService);

  renderOption: RenderOption = {
    "span": (node: any, next: (children: any) => any) => {
      return next(node.children);
    },
  };

  //onEntryChange = this.cs.stack().livePreview;

  // async getEntry(contentTypeUid: string, references: string[] = [], jsonRtePath: string[] = []): Promise<any> {
  //   try {
  //     const entry = await this.cs.stack().contentstack.ContentType(contentTypeUid)
  //       .Query()
  //       .includeReference(references)
  //       .toJSON()
  //       .find();

  //     if (jsonRtePath.length > 0) {
  //       Utils.jsonToHTML({
  //         entry,
  //         paths: jsonRtePath,
  //         renderOption: this.renderOption,
  //       });
  //     }

  //     return entry;
  //   } catch (err) {
  //     console.error('Error in getEntry:', err);
  //     throw err;
  //   }
  // }

  async getEntryWithQuery(
    contentTypeUid: string, 
    queryParams: QueryParams, 
    references: string[] = [], 
    jsonRtePath: string[] = []
  ): Promise<any> {
    try {
      const entry = await this.cs.stack().contentstack.ContentType(contentTypeUid)
        .Query()
        .where(queryParams.key, queryParams.value)
        .includeReference(references)
        .toJSON()
        .find();

      if (jsonRtePath.length > 0) {
        Utils.jsonToHTML({
          entry,
          paths: jsonRtePath,
          renderOption: this.renderOption,
        });
      }

      return entry;
    } catch (err) {
      console.error('Error in getEntryWithQuery:', err);
      throw err;
    }
  }
}