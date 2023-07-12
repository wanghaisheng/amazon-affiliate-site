import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/shaheer/Desktop/amazon-commerce/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}