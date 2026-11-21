/**
 * 宿主与插件共用的 UI 组件包。
 *
 * 这里是唯一实现：AmritaBot 前端、@amrita/webui-plugin-kit、外部插件
 * 都从这里取组件与类型，不再各自持有一份声明。
 */

export * from "./components/ui/badge";
export * from "./components/ui/button";
export * from "./components/ui/card";
export * from "./components/ui/dialog";
export * from "./components/ui/input";
export * from "./components/ui/label";
export * from "./components/ui/select";
export * from "./components/ui/separator";
export * from "./components/ui/skeleton";
export * from "./components/ui/sonner";
export * from "./components/ui/switch";
export * from "./components/ui/table";
export * from "./components/ui/tabs";
export * from "./components/ui/textarea";

export * from "./components/shared/DataTable";
export * from "./components/shared/StatCard";
export * from "./components/shared/ConfirmDialog";

export { cn } from "./lib/utils";
export { useTheme } from "./hooks/use-theme";
export { UI_EXPORTS, type UiExportName } from "./exports";
