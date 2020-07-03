export interface IFilterBar {
  icon?: string;
  text?: string;
  onCancelButtonPress?(): void;
  isVisible: boolean;
}
