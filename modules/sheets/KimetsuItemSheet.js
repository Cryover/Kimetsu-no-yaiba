export default class KnyrpgItemSheet extends ItemSheet {
    get template(){
        return `systems/kimetsu-no-yaiba/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}