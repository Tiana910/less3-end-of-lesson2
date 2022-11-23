export class Collection<V, K extends number | string | symbol = string > {

    //Ограничения обобщений 
    //pазрешать только типам:  number, string и symbol быть ключами объекта.
    // export class Collection <K extends number | string | symbol, V> {

    //Предустановка обобщённых типов
    //большинстве случаев при создании коллекции придётся указывать только один обобщённый параметр, а не два.
    //необязательный параметр не может стоять перед обязательным, поэтому мы поменяли K и V местами.
    // export class Collection <V, K extends number | string | symbol=string> {

    //Создание новых типов на основе обобщений
    //уметь получить из коллекции продуктов общую стоимость всех


    // здесь хранятся все элементы
    // any чуть позже доработаем, не переживайте
    items:Record<K, V> = {} as Record<K, V>

    // эмулируем свойство size
    get size(): number {
        return Object.keys(this.items).length
    }

    // добавить объект
    set(key: K, value: V): void {
        this.items[key] = value
    }

    // получить объект
    get(key: K): V {
        return this.items[key]
    }

    // проверить, есть ли объект
    has(key: K): boolean {
        return this.items[key] != null
    }

    // удалить объект, если есть
    // вернуть true если удаление выполнялось, false - если нет
    delete(key: K): boolean {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }

        return false

    }

    // очистить все элементы
    clear(): void {
        this.items = {} as Record<K, V>
    }

}