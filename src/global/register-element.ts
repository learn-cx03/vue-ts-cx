import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabPane,
  ElTabs,
  ElLink
} from 'element-plus'
import { App } from 'vue'
const components = [
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabPane,
  ElTabs,
  ElLink
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
