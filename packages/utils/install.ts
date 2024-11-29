import { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

const withInstall = (app:App) => {
    app.component()
}