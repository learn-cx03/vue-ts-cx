import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabPane,
  ElTabs
} from 'element-plus'
import { App } from 'vue'
const components = [ElButton, ElForm, ElFormItem, ElInput, ElTabs, ElTabPane]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
