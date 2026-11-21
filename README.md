# AmritaBot-UI

AmritaBot WebUI 与插件共用的 UI 组件包。宿主前端、`@amrita/webui-plugin-kit`、第三方插件都从这里取组件，避免各自维护一份组件与类型声明。

## 内容

- `src/components/ui/`：shadcn 风格原子组件（Button、Card、Dialog、Select、Table 等）
- `src/components/shared/`：业务通用件（DataTable、StatCard、ConfirmDialog）
- `src/lib/utils.ts`：`cn`
- `src/hooks/use-theme.ts`：明暗主题单例
- `src/exports.ts`：`UI_EXPORTS` 清单，宿主与插件构建套件共同依赖

## 使用

AmritaBot 以 git submodule 方式挂在 `frontend/packages/ui`，前端通过 `@amrita-constant/ui` 引入：

```tsx
import { Button, Card, cn } from "@amrita-constant/ui";
```

插件侧不直接打包这些组件。插件用 `@amrita/webui-plugin-kit/ui` 的导入写法，构建时会被换成从 `window.__AMRITA_HOST__.UI` 取值的再导出模块，因此插件产物里不会出现第二份组件实现。

## 样式

组件的 className 来自 Tailwind 4，配色变量由宿主在 `styles/globals.css` 里定义（`--primary` 一类）。宿主构建 Tailwind 时会扫描本包源码，所以这里新增的类名会被收进宿主的产物。

## 约定

- 组件必须声明完整 props 类型，不写 `any`。
- 新增或删除导出时同步改 `src/exports.ts`，并提醒宿主 bump `HOST_CONTRACT_VERSION`。
- 不引入依赖宿主运行时单例的模块；需要主题等宿主能力时走 props 或本包内的 hook。

## 开发

```bash
bun install
bun run typecheck
```

## 版本与发布

本包随 AmritaBot 的发版节奏发布。发布步骤与契约约定由维护者执行，
记录在 AmritaBot 仓库的 `FOR_MEMBERS.md`。
