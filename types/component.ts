export type ComponentPreviewProps = {
  name: string;
  code: string;
  highlightedCode: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
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
