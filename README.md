# Книга контактів

Візьми своє рішення завдання з попередньої домашньої роботи і додай зберігання
контактів телефонної книги в `localStorage`. Використовуй методи життєвого
циклу.

- Під час додавання та видалення контакту контакти зберігаються у локальне
  сховище.
- Під час завантаження застосунку контакти, якщо такі є, зчитуються з локального
  сховища і записуються у стан.

## Підготовка

`package.json`

```jsx
"homepage": "https://Roman80-IT.github.io/goit-react-hw-03-phonebook/",
```

### Усунення помилок при інсталяції

---

помилки пов'язані з застарілими версіями пакетів, які використовуються в
проекті. Щоб їх виправити, потрібно оновити ці пакети до актуальних версій.
Можна зробити це за допомогою `npm` (`Node Package Manager`) команди
`npm install` або `npm update`.

```
npm install @babel/plugin-transform-class-properties --save-dev

npm install @babel/plugin-transform-private-property-in-object --save-dev

npm install @babel/plugin-transform-object-rest-spread --save-dev

npm install svgo@2 --save-dev
```

# Виконання

## Варіант 1

```jsx
componentDidMount() {
    // Завантаження контактів з localStorage під час монтажу компонента
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Збереження контактів у localStorage при оновленні стану
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
```

Тут `componentDidMount` завантажує контакти з `localStorage` під час монтажу
компонента, а `componentDidUpdate` зберігає контакти у `localStorage` при
оновленні стану. Таким чином, контакти будуть зберігатися та завантажуватися з
`localStorage` під час використання застосунку.

Цей код використовує методи componentDidMount та componentDidUpdate для
завантаження контактів з локального сховища при завантаженні застосунку та
збереження контактів у локальному сховищі при кожному оновленні стану. Таким
чином, дані про контакти будуть зберігатися між сесіями використання застосунку.

## Варіант 2

```jsx
componentDidUpdate(prevProps, prevState) {
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}

componentDidMount() {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    this.setState({ contacts: JSON.parse(savedContacts) });
  }
}
```

## Настанови ментора

В локальне сховище дані потрібно записувати в тому випадку, коли змінився масив
з контактами (відбулося додавання/видалення контактів)

```jsx
componentDidUpdate(prevProps, prevState){
// Збереження контактів у локальне сховище при оновленні стану
 if(this.state.contacts !== prevState.contacts){
  localStorage.setItem()
 }
}
```

- Вся основна логіка повинна бути в **`Арр`**.
- Для додавання і видалення контактів використовувати значення від попереднього,
  уникаємо мутацій стейту.
- В компоненті **`ContactsList`** ніяких фільтрів не потрібно, лише створення
  розмітки.
