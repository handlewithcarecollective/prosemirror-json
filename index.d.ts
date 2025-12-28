export interface ProseMirrorJsonMark {
  type: string;
  attrs?: Record<string, unknown>;
}

export interface ProseMirrorJsonText {
  type: "text";
  text: string;
  marks?: ProseMirrorJsonMark[];
}

export interface ProseMirrorJsonNonTextNode {
  type: string;
  content?: ProseMirrorJsonNode[];
  marks?: ProseMirrorJsonMark[];
  attrs?: Record<string, unknown>;
}

export type ProseMirrorJsonNode =
  | ProseMirrorJsonNonTextNode
  | ProseMirrorJsonText;
