export type SourceCodes = Record<
  string,
  {
    code: string;
    highlightedCode: string;
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
