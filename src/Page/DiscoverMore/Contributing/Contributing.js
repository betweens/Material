import React from 'react';
import { 
  PrintCode,
} from '../../../components'
const gitPullCode = `git remote add upstream git@github.com:callemall/material-ui.git
git checkout master
git pull upstream master
git checkout -b my-topic-branch
npm update`;
const documentationCode = `npm install
cd docs
npm install
npm start`;
const RequiredKnowledge = () => (<div>
  <h2>Contributing</h2>
  <p>如果你正在读这个，你真棒！ 感谢您帮助我们使这个项目变得很好，并且成为Material-UI社区的一部分。 以下是一些可以帮助您的指南。</p>
  <h2>Asking Questions</h2>
  <p>对于问题和其他非问题，请使用<a href="http://stackoverflow.com/questions/tagged/material-ui">StackOverflow</a>或<a href="https://gitter.im/callemall/material-ui">Gitter</a>聊天，而不是Github问题。 有一个名为“material-ui”的StackOverflow标签可用于标记您的问题。</p>
  <h2>Opening an Issue</h2>
  <p>如果您认为您已经发现了一个错误，或者有一个新功能的想法，请先确保它尚未被<a href="https://github.com/callemall/material-ui/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aclosed">报告或修复</a>。 您可以搜索现有问题和PRs来查看有人是否报告了与您相似的问题。</p>
  <p>接下来，创建一个简单解释问题的新问题，并提供了一些有关触发它的情况的背景知识，并重现它的步骤。</p>
  <p>对于代码问题，请包括：</p>
  <ul>
    <li>Material-UI version</li>
    <li>React version</li>
    <li>Browser version</li>
    <li>A code example or link to a repo, gist or running site.</li>
  </ul>
  <p>对于视觉或布局问题，图像或动画GIF可以帮助您解释您的问题。 使用现场再现测试案例更好。 查看现场操作示例的<a href="https://raw.githubusercontent.com/callemall/material-ui/master/.github/ISSUE_TEMPLATE.md">ISSUE_TEMPLATE.md</a>文件。</p>
  <p>对于功能请求，请包括一个链接到Material Design规格的相关部分或屏幕截图。</p>
  <h3>Issue Guidelines</h3>
  <p>请在适当的情况下开始使用'[ComponentName]'的标题，并使用简明的描述。 “doesn't work”不帮助别人找到类似的问题。</p>
  <p>请不要将多个主题分成一个问题，而是每个都应该是自己的问题。</p>
  <p>请不要只'+1'一个问题。 它泄漏了维护者，并没有帮助推动这个问题。</p>
  <h2>Submitting a Pull Request</h2>
  <p>Material-UI是一个社区项目，所以pull requests总是受欢迎的，但是在进行大的改变之前，最好首先要和维护者讨论这个问题。</p>
  <p>如有疑问，请保持您的pull requests。 为了给予PR最好的接受机会，不要捆绑多个功能或错误修复每个拉请求。 创建两个比一个大的PRs总是最好的。</p>
  <p>与问题一起，请使用[ComponentName]开始标题。</p>
  <p>添加新功能或修改现有代码时，请尝试包含测试以确认新行为。 您可以在<a href="https://github.com/callemall/material-ui/blob/master/test/README.md">这里</a>阅读更多关于我们的测试设置。</p>
  <h3>Branch Structure</h3>
  <p>所有稳定版本都被标记（<a hfef="https://github.com/callemall/material-ui/tags">view tags</a>）。 在任何给定的时间，master代表library的最新开发版本。</p>
  <p>在v1-alpha分支上正在进行重新构建Material-UI与新的样式系统。 详情请参考<a href="https://github.com/callemall/material-ui/blob/master/ROADMAP.md">路线图</a>。</p>
  <p><span className="code">master</span> is unsafe</p>
  <p>我们将竭尽全力保持<span className="code">master</span>的良好状态，随时随地进行测试。 但为了快速移动，我们将对您的应用程序可能不兼容的API进行更改。</p>
  <h2>Getting started</h2>
  <p>请在您的fork上从最新的主人创建一个新的分支。 （注意，紧急修补程序应该分支最新的稳定版本而不是master）</p>
  <ul>
    <li>Fork the Material-UI repository on Github</li>
    <li>Clone your fork to your local machine git clone --depth 1 git@github.com:&lt;yourname&gt;/material-ui.git (For the v1-alpha branch, add the -b v1-alpha flag to the above command.)</li>
    <li>Create a branch git checkout -b my-topic-branch</li>
    <li>Make your changes, lint, then push to github with git push --set-upstream origin my-topic-branch.</li>
    <li>Visit github and make your pull request.</li>
  </ul>
  <p>如果您有现有的本地存储库，请在开始之前进行更新，以尽量减少合并冲突的机会。</p>
  <PrintCode code={gitPullCode} />
  <h3>Testing the documentation site</h3>
  <p>文档站点使用Material-UI构建，并包含所有组件的示例。 开始：</p>
  <PrintCode code={documentationCode} />
  <p>您现在可以在<a hfef="http://localhost:3000/">本地</a>访问文档站点。</p>
  <p>目前测试覆盖范围有限，但在可能的情况下，请对您所做的任何更改添加测试。 可以用npm run test进行测试。</p>
  <h3>Coding style</h3>
  <p>请遵循当前代码库的编码风格。 Material-UI使用eslint，所以如果可能，在编辑器中启用linting以获得实时反馈。 linting可以用npm run lint手动运行。</p>
  <p>最后，当您提交拉取请求时，连续集成测试会再次运行linting，但希望您的代码已经干净了！</p>
  <h2>Roadmap</h2>
  <p>要了解Material-UI所在的位置，或者了解您可以贡献的内容，请查看<a href="https://github.com/callemall/material-ui/blob/master/ROADMAP.md">roadmap</a>和<a href="https://github.com/callemall/material-ui/issues/2863">Material Design组件列表</a>。</p>
  <h2>License</h2>
  <p>By contributing your code to the callemall/material-ui GitHub repository, you agree to license your contribution under the MIT license.</p>
</div>);

export default RequiredKnowledge;
