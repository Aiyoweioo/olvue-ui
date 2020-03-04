# 效果演示
- 初始化vue项目: vue create demo
- 安装组件库: npm install olvue-ui
- 全局导入
```
import OlUI from 'olvue-ui'
import 'olvue-ui/lib/olvue-ui.css'
Vue.use(OlUI)
```
# ol组件库
仿element ui组件库。实现的组件有ol-button ol-checkbox ol-checkbox-group ol-dialog ol-form ol-form-item ol-input ol-radio ol-radio-group ol-switch ol-row ol-col
# 布局
### Attributes
| 参数 | 说明 | 类型  | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| gutter | 栅栏间隔 | number | — | 0 |
| span | 栅栏占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| type | 布局模式，可选flex | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
#### 基本结构
- 基础布局
- 分栏间隔
- 混合布局
- 分栏偏移
- flex布局
## button组件
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 类型 | string | primary / success / warning / danger / info / text | default |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
| icon | 图标类型 | string | — | — |
### 事件
| 事件名 | 事件描述 |
| ---- | ---- |
| click | 点击事件 |
### 基本结构
```html
<ol-button @click="fn">默认</ol-button>
<ol-button type="primary">主要</ol-button>
<ol-button type="success">成功</ol-button>
<ol-button type="warning">警告</ol-button>
<ol-button type="danger">危险</ol-button>
<ol-button type="info">信息</ol-button>
<ol-button type="default">信息</ol-button>
```

## dialog组件
### Attributes
| 参数 | 说明 | 类型  | 默认值 |
| ---- | ---- | ---- | ---- |
| title | 对话框标题 | string | 提示 |
| width | 对话框宽度 | string | 50% |
| top | 与顶部的距离 | string | 15vh |
| visable | 是否显示dialog(支持sync修饰符) | boolean | false |
### 事件
| 事件名 | 事件描述 |
| ---- | ---- |
| opened | 模态框显示 |
| closed | 模态框关闭 |
### 插槽说明
| 插槽名称 | 插槽描述 |
| ---- | ---- |
| title | 模态框标题 |
| default | 模态框内容 |
| footer | 模态框的底部操作区 |
### 基本结构
```html
<ol-button type="primary" @click="visible=true">点击显示对话框</ol-button>
<ol-dialog width="20%" top="100px" :visible.sync="visible">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <template v-slot:footer>
    <ol-button type="primary" @click="visible=false">确认</ol-button>
    <ol-button @click="visible=false">取消</ol-button>
  </template>
</ol-dialog>
```

## input组件和textarea组件
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 类型 | string | text / password / textarea| text |
| name | name属性 | string | — | — |
| placeholder | 占位符 | string | — | — |
| clearable | 是否显示清空按钮 | boolean | — | false |
| show-password | 是否显示密码切换按钮 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
### Attributes--TextArea
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 类型 | string | textarea | text |
| name | name属性 | string | — | — |
| placeholder | 占位符 | string | — | — |
| disabled | 是否禁用状态 | boolean | — | false |
| rows | 原生textarea属性 | string | — | 1 |
| autosize | 可自适应文本高度的textarea | boolean | — | false |
### 事件
| 事件名 | 事件描述 |
| ---- | ---- |
| focus | 获取焦点事件 |
| blur | 失去焦点事件 |
| change | 内容改变事件 |
### 基本结构
```html
<ol-input type="text" name="username" placeholder="请输入姓名" v-model="username" />

<ol-input type="textarea" name="username" placeholder="请输入姓名" rows=3 />

<ol-input type="textarea" name="username" placeholder="请输入姓名" autosize />
```

# switch组件
### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| v-model | 双向绑定 | boolean | false |
| name | name属性 | string | text |
| activeColor | 自定义激活的颜色 | string | - |
| inactiveColor | 自定义不激活的颜色 | string | - |
### 事件
| 事件名 | 事件描述 |
| ---- | ---- |
| change | change时触发的事件 |
### 基本结构
```html
<ol-switch v-model="active" name="name" active-color="yellow" inactive-color="red" />
```

# radio组件
### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| v-model | 双向绑定 | string / number / boolean | - |
| name | name属性 | string | - |
| label | Radio的value值 | string / number / boolean | - |

## radiogroup组件
### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| v-model | 双向绑定 | - | - |
### 基本结构
```html
<!-- radio组件 -->
<ol-radio label="1" v-model="gender">男</ol-radio>
<ol-radio label="0" v-model="gender">女</ol-radio>
<ol-radio label="1" v-model="gender"></ol-radio>
<ol-radio label="0" v-model="gender"></ol-radio>

<!-- radioGroup组件 -->
<ol-radio-group v-model="gender">
  <ol-radio label="1">男</ol-radio>
  <ol-radio label="0">女</ol-radio>
</ol-radio-group>
```

# checkbox组件
### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| value | 单个checkbox的绑定 | boolean | false |
| name | name属性 | string | - |
| label | checkbox的value值 | string / number / boolean | - |

# checkboxgroup组件
### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| v-model | 双向绑定 | - | - |
### 基本结构
```html
<ol-checkbox v-model="active">是否选中</ol-checkbox>
<ol-checkbox v-model="active"></ol-checkbox>

<ol-checkbox-group v-model="fruit">
  <ol-checkbox label="苹果"></ol-checkbox>
  <ol-checkbox label="香蕉"></ol-checkbox>
  <ol-checkbox label="橙子"></ol-checkbox>
</ol-checkbox-group>
```

# form组件
### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| model | 表单数据对象 | object | - |
| labelWidth | 表单域标签的宽度 | string | - |

# form-item组件
### Attributes
| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| label | 标签文本| string | - |
### 基本结构
```html
<!-- form组件 -->
<ol-form :model="formData" label-width="100px" :rules="rules">
  <ol-form-item label="用户名" prop="name">
    <ol-input placeholder="请输入用户名" v-model="model.username"></ol-input>
  </ol-form-item>
  <ol-form-item label="邮箱" prop="email">
    <ol-input placeholder="请输入邮箱" v-model="model.email"></ol-input>
  </ol-form-item>
  <ol-form-item label="性别">
    <ol-radio-group v-model="gender">
      <ol-radio label="1">男</ol-radio>
      <ol-radio label="0">女</ol-radio>
    </ol-radio-group>
  </ol-form-item>
</ol-form>
```