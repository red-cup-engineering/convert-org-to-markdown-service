export declare const CONVERSION_FILTERS: readonly string[];

export declare const CONVERSION_CONTRACT: Readonly<{
  from: string;
  to: string;
  wrap: string;
  standalone: boolean;
}>;

export declare function pandocOrgToMarkdownArguments(options?: {
  filtersDirectory?: string;
}): string[];

export declare function convertOrgToMarkdown(
  org: string,
  options?: { pandocPath?: string; filtersDirectory?: string },
): Promise<string>;
