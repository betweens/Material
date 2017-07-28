import React from 'react';
import './RequiredKnowledge.css';

const RequiredKnowledge = () => (<div className="markdown-body">
  <h2>所需知识</h2>
  <p>我们建议您在进入Material-UI之前了解<a href="http://facebook.github.io/react/">React</a>。 Material-UI是一组React组件，因此了解React如何适应Web开发很重要。</p>
  <p>如果您已经熟悉单页面应用程序（SPA）和 Node，请随时跳过本节并直接转到安装部分。</p>
  <p>否则，以下是对SPA和Node的简要介绍。 你会发现这是有帮助的，特别是如果你有有限的Web开发经验，或者如果你的经验只包含使用HTML，CSS和一些JavaScript构建的“传统”网站。</p>
  <h3 id="single-page-applications">单页应用</h3>
  <p>一段时间以前，网站使用HTML中的静态页面构建，CSS用于样式，JavaScript用于支持用户交互或动画。 大多数客户端交互，特别是那些对数据采取行动的交互涉及到完整的服务器往返：来自客户端的数据被发送到处理它的服务器，然后将结果发送回客户端。 而且，这个交互大部分都是blocking的。 也就是说，在这些往返行程中，客户端很忙，无法进行互动。</p>
  <p>随着异步服务器调用（AJAX）的出现，客户端现在可以在将数据发送到服务器并等待响应时执行其他操作。 然而，大多数客户端交互仍然需要服务器往返，并且网站根本就没有像本地桌面应用那样流畅和响应。 这就是为什么SPAs成立的原因。</p>
  <p>SPA是一个“网站”，其基本上由一个页面组成。 也就是说，整个网站生活在从服务器发送到客户端一次的单个文件（通常是一个JavaScript文件）中。 处理客户端交互的大多数逻辑都在该单个文件中。 因此，提供流畅，响应和快速的Web体验所需的一切都在浏览器的内存中。 这个网络编程架构在过去十年中获得了巨大的发展，许多流行的面向SPA的JavaScript演示框架：</p>
  <ul>
    <li><a href="https://angularjs.org">Angular</a></li>
    <li><a href="http://emberjs.com/">Ember</a></li>
    <li><a href="http://backbonejs.org">Backbone</a></li>
    <li><a href="http://facebook.github.io/react/">React</a></li>
  </ul>
  <p>在单个文件中包含网站的所有代码会给代码组织带来巨大的挑战。幸运的是，有几个工具允许我们将代码分解成更小的模块（类似于将面向对象的应用程序分解为不同的类和接口），这些工具可以在以后捆绑在一起。这就是Node。</p>
  <h3 id="node">Node</h3>
  <p>其核心在于<a href="https://nodejs.org">Node</a>是一个使用C ++编写的程序，它允许我们在shell中运行JavaScript（是的，你的终端，而不是浏览器）。 为此，它使用Chrome的V8 JavaScript引擎。 因此，Node本质上是一个运行时环境。</p>
  <p>当它首次创建时，Node主要针对开发JavaScript中的Web服务器。 这是有点激进的，因为JavaScript一直被限制在客户端。 然而，随着时间的推移，Web开发人员认识到使用Node的工具和依赖关系管理的好处，并创建了如下项目：</p>
  <ul>
    <li><a href="http://gruntjs.com/">Grunt</a></li>
    <li><a href="http://gulpjs.com/">Gulp</a></li>
    <li><a href="http://browserify.org">Browserify</a></li>
    <li><a href="http://webpack.github.io">Webpack</a></li>
  </ul>
  <p>随着node的流行，独立的开发人员和组织编写了脚本（运行使用Node）来做几乎所有Web应用程序相关的工作。 当然，整个社区可以从这些“定制节点脚本”中获益。 这就需要一些包存储库，任何人都可以上传他们的Node脚本，而其他开发人员可以在自己的项目中使用这些脚本。</p>
  <p><a href="https://www.npmjs.com/">Node Package Manager</a>，更好地称为“npm”，正是这样。 npm是一个命令行工具，除其他外，可以将外部JavaScript并入自己的项目中。 例如，Material-UI可以通过npm以包方式提供。 这意味着您可以通过从项目目录中运行<code>npm install material-ui</code>，然后使用所需的Material-UI组件，将Material-UI包含在项目中。</p>
  <p>这是一个快速介绍！ 如果您觉得您需要更多的Node，我们建议您在跳到Material-UI之前在线查阅一些快速教程。 这个博文和视频是很好的起点。</p>
</div>);

export default RequiredKnowledge;
