import { defineStore, acceptHMRUpdate } from 'pinia'

interface ButtonItem {
    name: string
    click: () => void
}
interface ButtonGrounp {
    group: ButtonItem[]
}
const buttonGrounp = defineStore({
    id: 'btgrounp',
    state: (): ButtonGrounp => ({
        /** @type {ButtonItem[]} */
        group: []
    }),
    getters: {
        getBtGp(): ButtonItem[] {
            return this.group
        }
    },
    actions: {
        changeGroup(group: ButtonItem[]) {
            this.group = group
        },
        clearButton() {
            this.group = []
        }
    }
})

export default buttonGrounp

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(buttonGrounp, import.meta.hot))
}
