# React 技术栈 TodoList 实战源码使用说明

## 目录结构

* public(静态文件依赖)
  - index.html(网页文件，此处可以修改应用在浏览器中的标题等信息)
  - favicon.ico
  - manifest.json
* src
  - Components(展示组件目录)
    + Footer.js(底部导航组件)
    + Link.js(单个导航链接组件)
    + Root.js(包含redux/react-router容器的主文件)
    + Todo.js(单个待办事项组件)
    + TodoApp.js(React组件主文件)
    + TodoList.js(待办事项列表组件)
  - Containers(容器组件目录)
    + AddTodo.js(添加待办事项输入框组件)
    + VisibleTodoList.js(待办事项列表容器组件)
  - action.js(redux中的action，定义动作，代表应用功能)
  - index.js(项目主文件)
  - reducer.js(redux中的reducer，处理状态数据)
  - selector.js(redux中的selector，选择性获取状态数据)
  - store.js(redux中的store，存取状态数据)
* .eslintrc(ESLint扩展配置文件)

## 使用方法

**进入 TodoList 文件夹**

```bash
cd TodoList
```

**安装项目依赖**

```bash
npm install
```

覆盖替换每节课程的 `src` 目录以查阅该节课程源码及运行效果

**运行代码**

```bash
npm start
```

