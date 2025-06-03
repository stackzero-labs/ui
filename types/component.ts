export type SourceCodes = Record<
  string,
  {
    code: string;
    highlightedCode: string;
    fileName?: string; // Optional file name for better context
    isMainFile?: boolean; // Optional flag to indicate if this is the main file
  }
>;

export type ComponentPreviewProps = {
  name: string;
  displayExampleName?: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  codeRendererFiles?: string[];
  source: SourceCodes;
};

export type PagePreviewProps = {
  name: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  source: SourceCodes;
};

export type ComponentDisplayProps = {
  component: React.ReactElement;
  hasReTrigger: boolean;
  className?: string;
  reTriggerKey: number;
  reTrigger: () => void;
  isPreview?: boolean;
};

export type CodePreviewProps = {
  code: string;
  highlightedCode: string;
};
