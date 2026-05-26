# ODES Tech Website

## 主题 partial 覆盖点说明

本项目使用 Hugo module 引入 `github.com/gethinode/hinode` 主题；`layouts/partials/` 下与主题同名路径的 partial 会覆盖主题默认实现。

当前仓库中用于主题覆盖的 partial（按目录）如下：

- `layouts/partials/assets/sharing.html`
- `layouts/partials/content/footer.html`
- `layouts/partials/content/meta.html`
- `layouts/partials/content/toc.html`
- `layouts/partials/css/custom.css`
- `layouts/partials/footer/footer.html`
- `layouts/partials/footer/links.html`
- `layouts/partials/footer/social.html`
- `layouts/partials/head/favicon.html`
- `layouts/partials/logo.html`

> 说明：此前存在拼写异常文件 `layouts/partials/content/heade.html`（`heade`）。该文件并非 Hinode 约定覆盖点；针对 favicon/`<head>` 的覆盖应使用 `layouts/partials/head/favicon.html`。

后续新增覆盖点时，请优先遵循主题命名与目录约定：页面 `<head>` 区域使用 `head/*`，页面正文头部才使用 `header` 相关模板；并在实际 layout 中显式引用，避免“孤立 partial”无法生效。
