## Локальний запуск проекту

1. Переконайтеся, що на комп'ютері встановлена LTS-версія Node.js.
   [Треба скачати та встановити](https://nodejs.org/en/) її якщо необхідно.
2. Встановіть базові залежності проекту - команда `npm install`.
3. Запустіть режим розробки, виконавши - команда `npm start`.
4. Перейдіть в браузер за адресою
   [http://localhost:3000](http://localhost:3000). Ця сторінка буде автоматично
   перезавантажена після збереження змін в файлах проекту.

## Деплой

Продакшн версія проекту буде автоматично проходить лінтинг, збиратися і
розгортатися на GitHub Pages, у вікні `gh-pages`, кожен раз, коли оновлюється
ветка `main`. Наприклад, після прямого пуша або прийнятого пул-реквеста. Для
цього необхідно у файлі `package.json` відредактувати поле `homepage`, замінив
`your_username` і `your_repo_name` на Ваші, а також змінити зміни на GitHub.

```json
"домашня сторінка": "https://your_username.github.io/your_repo_name/"
```

Далі необхідно зайти в налаштування GitHub-репозиторія (`Налаштування` >
`Сторінки`) і вивести роздачу продакшн версії файлів з папки `/root` гілки
`gh-pages`, якщо це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус розгорнутого крайнього коміта відображається іконкою з його
ідентифікатором.

- **Жовтий колір** - виконується збірка і розгортання проекту.
- **Зелений колір** - розгортання завершено успішно.
- **Червоний колір** - під час лінтинга, збірки або розгортання виникла помилка.

Більш детальну інформацію про статус можна переглянути, якщо клацнути по іконці, і вікні, що випало, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)


