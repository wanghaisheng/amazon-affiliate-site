<template>
    <main class="container mx-auto px-6">
        <div id="blog-header">
            <div class="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
                <dl>
                    <div>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time
                                datetime="2021-08-07T15:32:14.000Z">August 7, 2021</time></dd>
                    </div>
                </dl>
                <div>
                    <h1
                        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                        New features in v1</h1>
                </div>
            </div>
        </div>
        <div class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style="grid-template-rows: auto 1fr;">
            <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div class="prose max-w-none pt-10 pb-8 dark:prose-dark">
                    <h2 id="overview"><a href="#overview" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Overview</h2>
                    <p>A post on the new features introduced in v1.0. New features:</p>
                    <ul>
                        <li class="false"><a href="#theme-colors">Theme colors</a></li>
                        <li class="false"><a href="#xdm-mdx-compiler">Xdm MDX compiler</a></li>
                        <li class="false"><a href="#table-of-contents-component">Table of contents component</a></li>
                        <li class="false"><a href="#layouts">Layouts</a></li>
                        <li class="false"><a href="#analytics">Analytics</a></li>
                        <li class="false"><a href="#blog-comments-system">Blog comments system</a></li>
                        <li class="false"><a href="#multiple-authors">Multiple authors</a></li>
                        <li class="false"><a href="#copy-button-for-code-blocks">Copy button for code blocks</a></li>
                        <li class="false"><a href="#line-highlighting-and-line-numbers">Line highlighting and line
                                numbers</a></li>
                        <li class="false"><a href="#newletter-component-v113">Newletter component (v1.1.3)</a></li>
                        <li class="false"><a href="#bibliography-and-citations-v121">Bibliography and Citations (v1.2.1)</a>
                        </li>
                        <li class="false"><a href="#self-hosted-font-v150">Self-hosted font (v1.5.0)</a></li>
                        <li class="false"><a href="#upgrade-guide">Upgrade guide</a></li>
                    </ul>
                    <p>First load JS decreased from 43kB to 39kB despite all the new features added!<sup><a
                                href="#user-content-fn-1" aria-describedby="footnote-label" data-footnote-ref="true"
                                id="user-content-fnref-1">1</a></sup></p>
                    <p>See <a href="#upgrade-guide">upgrade guide</a> below if you are migrating from v0 version of the
                        template.</p>
                    <h2 id="theme-colors"><a href="#theme-colors" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Theme colors</h2>
                    <p>You can easily modify the theme color by changing the primary attribute in the tailwind config file:
                    </p>
                    <div class="remark-code-title">tailwind.config.js</div>
                    <div class="relative">
                        <pre><code class="code-highlight language-js"><span class="code-line">theme<span class="token operator">:</span> <span class="token punctuation">{</span>
</span><span class="code-line">    colors<span class="token operator">:</span> <span class="token punctuation">{</span>
</span><span class="code-line">      primary<span class="token operator">:</span> colors<span class="token punctuation">.</span><span class="token property-access">teal</span><span class="token punctuation">,</span>
</span><span class="code-line">      gray<span class="token operator">:</span> colors<span class="token punctuation">.</span><span class="token property-access">neutral</span><span class="token punctuation">,</span>
</span><span class="code-line">      <span class="token operator spread">...</span>
</span><span class="code-line">    <span class="token punctuation">}</span>
</span><span class="code-line">  <span class="token operator spread">...</span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span></code></pre>
                    </div>
                    <p>The primary color attribute should be assigned an object with keys from 50, 100, 200 ... 900 and the
                        corresponding color code values.</p>
                    <p>Tailwind includes great default color palettes that can be used for theming your own website. Check
                        out <a target="_blank" rel="noopener noreferrer"
                            href="https://tailwindcss.com/docs/customizing-colors">customizing colors documentation page</a>
                        for the full range of options.</p>
                    <p>Migrating from v1? You can revert to the previous theme by setting <code>primary</code> to
                        <code>colors.sky</code> (Tailwind 2.2.2 and above, otherwise <code>colors.lightBlue</code>) and
                        changing gray to <code>colors.gray</code>.
                    </p>
                    <p>From v1.1.2+, you can also customize the style of your code blocks easily by modifying the
                        <code>css/prism.css</code> stylesheet. Token classnames are compatible with prismjs so you can copy
                        and adapt token styles from a prismjs stylesheet e.g. <a target="_blank" rel="noopener noreferrer"
                            href="https://github.com/PrismJS/prism-themes">prism themes</a>.
                    </p>
                    <h2 id="xdm-mdx-compiler"><a href="#xdm-mdx-compiler" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Xdm MDX compiler</h2>
                    <p>We switched the MDX bundler from <a target="_blank" rel="noopener noreferrer"
                            href="https://github.com/hashicorp/next-mdx-remote">next-mdx-remote</a> to <a target="_blank"
                            rel="noopener noreferrer" href="https://github.com/kentcdodds/mdx-bundler">mdx-bundler</a>. This
                        uses <a target="_blank" rel="noopener noreferrer" href="https://github.com/wooorm/xdm">xdm</a> under
                        the hood, the latest micromark 3 and remark, rehype libraries.</p>
                    <p><strong>Warning:</strong> If you were using custom remark or rehype libraries, please upgrade to
                        micromark 3 compatible ones. If you are upgrading, please delete <code>node_modules</code> and
                        <code>package-lock.json</code> to avoid having past dependencies related issues.
                    </p>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/wooorm/xdm">xdm</a> contains
                        multiple improvements over <a target="_blank" rel="noopener noreferrer"
                            href="https://github.com/mdx-js/mdx">@mdx-js/mdx</a>, the compiler used internally by
                        next-mdx-remote, but there might be some breaking behaviour changes. Please check your markdown
                        output to verify.</p>
                    <p>Some new possibilities include loading components directly in the mdx file using the import syntax
                        and including js code which could be compiled and bundled at the build step.</p>
                    <p>For example, the following jsx snippet can be used directly in an MDX file to render the page title
                        component:</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-jsx"><span class="code-line"><span class="token keyword module">import</span> <span class="token imports"><span class="token maybe-class-name">PageTitle</span></span> <span class="token keyword module">from</span> <span class="token string">'./PageTitle.js'</span>
</span><span class="code-line"><span class="token punctuation">;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">PageTitle</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> Using JSX components in MDX </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">PageTitle</span></span><span class="token punctuation">&gt;</span></span>
</span></code></pre>
                    </div>
                    <h1
                        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                        Using JSX components in MDX</h1>
                    <p>The default configuration resolves all components relative to the <code>components</code> directory.
                    </p>
                    <p><strong>Note</strong>: Components which require external image loaders also require additional
                        esbuild configuration. Components which are dependent on global application state on lifecycle like
                        the Nextjs <code>Link</code> component would also not work with this setup as each mdx file is built
                        independently. For such cases, it is better to use component substitution.</p>
                    <h2 id="table-of-contents-component"><a href="#table-of-contents-component" aria-hidden="true"
                            tabindex="-1"><span class="icon icon-link"></span></a>Table of contents component</h2>
                    <p>Inspired by <a target="_blank" rel="noopener noreferrer"
                            href="https://docusaurus.io/docs/next/markdown-features/inline-toc">Docusaurus</a> and Gatsby's
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://www.gatsbyjs.com/plugins/gatsby-remark-table-of-contents/">gatsby-remark-table-of-contents</a>,
                        the <code>toc</code> variable containing all the top level headings of the document is passed to the
                        MDX file and can be styled accordingly. To make generating a table of contents (TOC) simple, you can
                        use the existing <code>TOCInline</code> component.
                    </p>
                    <p>For example, the TOC in this post was generated with the following code:</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-jsx"><span class="code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TOCInline</span></span> <span class="token attr-name">toc</span><span class="token language-javascript script"><span class="token punctuation script-punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span><span class="token property-access">toc</span><span class="token punctuation">}</span></span> <span class="token attr-name">exclude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Overview<span class="token punctuation">"</span></span> <span class="token attr-name">toHeading</span><span class="token language-javascript script"><span class="token punctuation script-punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</span></code></pre>
                    </div>
                    <p>You can customise the headings that are displayed by configuring the <code>fromHeading</code> and
                        <code>toHeading</code> props, or exclude particular headings by passing a string or a string array
                        to the <code>exclude</code> prop. By default, all headings that are of depth 3 or smaller are
                        indented. This can be configured by changing the <code>indentDepth</code> property. A
                        <code>asDisclosure</code> prop can be used to render the TOC within an expandable disclosure
                        element.
                    </p>
                    <p>Here's the full TOC rendered in a disclosure element.</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-jsx"><span class="code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TOCInline</span></span> <span class="token attr-name">toc</span><span class="token language-javascript script"><span class="token punctuation script-punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span><span class="token property-access">toc</span><span class="token punctuation">}</span></span> <span class="token attr-name">asDisclosure</span> <span class="token punctuation">/&gt;</span></span>
</span></code></pre>
                    </div>
                    <details open="">
                        <summary class="ml-6 pt-2 pb-2 text-xl font-bold">Table of Contents</summary>
                        <div class="ml-6">
                            <ul>
                                <li class="false"><a href="#overview">Overview</a></li>
                                <li class="false"><a href="#theme-colors">Theme colors</a></li>
                                <li class="false"><a href="#xdm-mdx-compiler">Xdm MDX compiler</a></li>
                                <li class="false"><a href="#table-of-contents-component">Table of contents component</a>
                                </li>
                                <li class="false"><a href="#layouts">Layouts</a></li>
                                <li class="ml-6"><a href="#adding-new-templates">Adding new templates</a></li>
                                <li class="ml-6"><a href="#configuring-a-blog-post-frontmatter">Configuring a blog post
                                        frontmatter</a></li>
                                <li class="ml-6"><a href="#extend">Extend</a></li>
                                <li class="false"><a href="#analytics">Analytics</a></li>
                                <li class="false"><a href="#blog-comments-system">Blog comments system</a></li>
                                <li class="false"><a href="#multiple-authors">Multiple authors</a></li>
                                <li class="ml-6"><a href="#multiple-authors-in-blog-post">Multiple authors in blog post</a>
                                </li>
                                <li class="false"><a href="#copy-button-for-code-blocks">Copy button for code blocks</a>
                                </li>
                                <li class="false"><a href="#line-highlighting-and-line-numbers">Line highlighting and line
                                        numbers</a></li>
                                <li class="false"><a href="#newletter-component-v113">Newletter component (v1.1.3)</a></li>
                                <li class="false"><a href="#bibliography-and-citations-v121">Bibliography and Citations
                                        (v1.2.1)</a></li>
                                <li class="false"><a href="#self-hosted-font-v150">Self-hosted font (v1.5.0)</a></li>
                                <li class="false"><a href="#upgrade-guide">Upgrade guide</a></li>
                            </ul>
                        </div>
                    </details>
                    <h2 id="layouts"><a href="#layouts" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Layouts</h2>
                    <p>You can map mdx blog content to layout components by configuring the frontmatter field. For example,
                        this post is written with the new <code>PostSimple</code> layout!</p>
                    <h3 id="adding-new-templates"><a href="#adding-new-templates" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Adding new templates</h3>
                    <p>layout templates are stored in the <code>./layouts</code> folder. You can add your React components
                        that you want to map to markdown content in this folder. The component file name must match that
                        specified in the markdown frontmatter <code>layout</code> field.</p>
                    <p>The only required field is <code>children</code> which contains the rendered MDX content, though you
                        would probably want to pass in the frontMatter contents and render it in the template.</p>
                    <p>You can configure the template to take in other fields - see <code>PostLayout</code> component for an
                        example.</p>
                    <p>Here's an example layout which you can further customise:</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-jsx"><span class="code-line"><span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">ExampleLayout</span></span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> frontMatter<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> date<span class="token punctuation">,</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> frontMatter
</span><span class="code-line">
</span><span class="code-line">  <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>
</span><span class="code-line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SectionContainer</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></span><span class="code-line"><span class="token plain-text">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>date<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></span><span class="code-line"><span class="token plain-text">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></span><span class="code-line"><span class="token plain-text">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></span><span class="code-line"><span class="token plain-text">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SectionContainer</span></span><span class="token punctuation">&gt;</span></span>
</span><span class="code-line">  <span class="token punctuation">)</span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span></code></pre>
                    </div>
                    <h3 id="configuring-a-blog-post-frontmatter"><a href="#configuring-a-blog-post-frontmatter"
                            aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring a blog post
                        frontmatter</h3>
                    <p>Use the <code>layout</code> frontmatter field to specify the template you want to map the markdown
                        post to. Here's how the frontmatter of this post looks like:</p>
                    <div class="relative">
                        <pre><code class="code-highlight"><span class="code-line">---
</span><span class="code-line">title: 'New features in v1'
</span><span class="code-line">date: '2021-05-26   '
</span><span class="code-line">tags: ['next-js', 'tailwind', 'guide']
</span><span class="code-line">draft: false
</span><span class="code-line">summary: 'Introducing the new layout features - you can map mdx blog content to layout components by configuring the frontmatter field'
</span><span class="code-line">layout: PostSimple
</span><span class="code-line">---
</span></code></pre>
                    </div>
                    <p>You can configure the default layout in the respective page section by modifying the
                        <code>DEFAULT_LAYOUT</code> variable. The <code>DEFAULT_LAYOUT</code> for blog posts page is set to
                        <code>PostLayout</code>.
                    </p>
                    <h3 id="extend"><a href="#extend" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Extend</h3>
                    <p><code>layout</code> is mapped to wrapper which wraps the entire MDX content.</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-jsx"><span class="code-line"><span class="token keyword module">export</span> <span class="token keyword">const</span> <span class="token maybe-class-name">MDXComponents</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token maybe-class-name">Image</span><span class="token punctuation">,</span>
</span><span class="code-line">  a<span class="token operator">:</span> <span class="token maybe-class-name">CustomLink</span><span class="token punctuation">,</span>
</span><span class="code-line">  pre<span class="token operator">:</span> <span class="token maybe-class-name">Pre</span><span class="token punctuation">,</span>
</span><span class="code-line">  <span class="token function function-variable">wrapper</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> components<span class="token punctuation">,</span> layout<span class="token punctuation">,</span> <span class="token operator spread">...</span>rest <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator arrow">=&gt;</span> <span class="token punctuation">{</span>
</span><span class="code-line">    <span class="token keyword">const</span> <span class="token maybe-class-name">Layout</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string template-punctuation">`</span><span class="token string">../layouts/</span><span class="token interpolation"><span class="token punctuation interpolation-punctuation">${</span>layout<span class="token punctuation interpolation-punctuation">}</span></span><span class="token string template-punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword module">default</span>
</span><span class="code-line">    <span class="token keyword control-flow">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator spread">...</span>rest<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</span><span class="code-line">  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span><span class="code-line">
</span><span class="code-line"><span class="token keyword module">export</span> <span class="token keyword">const</span> <span class="token function function-variable"><span class="token maybe-class-name">MDXLayoutRenderer</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> layout<span class="token punctuation">,</span> mdxSource<span class="token punctuation">,</span> <span class="token operator spread">...</span>rest <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator arrow">=&gt;</span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token keyword">const</span> <span class="token maybe-class-name">MDXLayout</span> <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator arrow">=&gt;</span> <span class="token function">getMDXComponent</span><span class="token punctuation">(</span>mdxSource<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>mdxSource<span class="token punctuation">]</span><span class="token punctuation">)</span>
</span><span class="code-line">
</span><span class="code-line">  <span class="token keyword control-flow">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MDXLayout</span></span> <span class="token attr-name">layout</span><span class="token language-javascript script"><span class="token punctuation script-punctuation">=</span><span class="token punctuation">{</span>layout<span class="token punctuation">}</span></span> <span class="token attr-name">components</span><span class="token language-javascript script"><span class="token punctuation script-punctuation">=</span><span class="token punctuation">{</span><span class="token maybe-class-name">MDXComponents</span><span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator spread">...</span>rest<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span></code></pre>
                    </div>
                    <p>Use the <code>MDXLayoutRenderer</code> component on a page where you want to accept a layout name to
                        map to the desired layout. You need to pass the layout name from the layout folder (it has to be an
                        exact match).</p>
                    <h2 id="analytics"><a href="#analytics" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Analytics</h2>
                    <p>The template now supports <a target="_blank" rel="noopener noreferrer"
                            href="https://plausible.io/">plausible</a>, <a target="_blank" rel="noopener noreferrer"
                            href="https://simpleanalytics.com/">simple analytics</a> and google analytics. Configure
                        <code>siteMetadata.js</code> with the settings that correspond with the desired analytics provider.
                    </p>
                    <div class="relative">
                        <pre><code class="code-highlight language-js"><span class="code-line">analytics<span class="token operator">:</span> <span class="token punctuation">{</span>
</span><span class="code-line">    <span class="token comment">// supports plausible, simpleAnalytics or googleAnalytics</span>
</span><span class="code-line">    plausibleDataDomain<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// e.g. tailwind-nextjs-starter-blog.vercel.app</span>
</span><span class="code-line">    simpleAnalytics<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// true or false</span>
</span><span class="code-line">    googleAnalyticsId<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// e.g. UA-000000-2 or G-XXXXXXX</span>
</span><span class="code-line">  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</span></code></pre>
                    </div>
                    <p>Custom events are also supported. You can import the <code>logEvent</code> function from
                        <code>@components/analytics/[ANALYTICS-PROVIDER]</code> file and call it when triggering certain
                        events of interest. <em>Note</em>: Additional configuration might be required depending on the
                        analytics provider, please check their official documentation for more information.
                    </p>
                    <h2 id="blog-comments-system"><a href="#blog-comments-system" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Blog comments system</h2>
                    <p>We have also added support for <a target="_blank" rel="noopener noreferrer"
                            href="https://github.com/laymonage/giscus">giscus</a>, <a target="_blank"
                            rel="noopener noreferrer" href="https://github.com/utterance/utterances">utterances</a> or
                        disqus. To enable, simply configure <code>siteMetadata.js</code> comments property with the desired
                        provider and settings as specified in the config file.</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-js"><span class="code-line">comment<span class="token operator">:</span> <span class="token punctuation">{</span>
</span><span class="code-line">    <span class="token comment">// Select a provider and use the environment variables associated to it</span>
</span><span class="code-line">    <span class="token comment">// https://vercel.com/docs/environment-variables</span>
</span><span class="code-line">    provider<span class="token operator">:</span> <span class="token string">'giscus'</span><span class="token punctuation">,</span> <span class="token comment">// supported providers: giscus, utterances, disqus</span>
</span><span class="code-line">    giscusConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
</span><span class="code-line">      <span class="token comment">// Visit the link below, and follow the steps in the 'configuration' section</span>
</span><span class="code-line">      <span class="token comment">// https://giscus.app/</span>
</span><span class="code-line">      repo<span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token property-access">env</span><span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_GISCUS_REPO</span><span class="token punctuation">,</span>
</span><span class="code-line">      repositoryId<span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token property-access">env</span><span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_GISCUS_REPOSITORY_ID</span><span class="token punctuation">,</span>
</span><span class="code-line">      category<span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token property-access">env</span><span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_GISCUS_CATEGORY</span><span class="token punctuation">,</span>
</span><span class="code-line">      categoryId<span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token property-access">env</span><span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_GISCUS_CATEGORY_ID</span><span class="token punctuation">,</span>
</span><span class="code-line">      mapping<span class="token operator">:</span> <span class="token string">'pathname'</span><span class="token punctuation">,</span> <span class="token comment">// supported options: pathname, url, title</span>
</span><span class="code-line">      reactions<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token comment">// Emoji reactions: 1 = enable / 0 = disable</span>
</span><span class="code-line">      <span class="token comment">// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable</span>
</span><span class="code-line">      metadata<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
</span><span class="code-line">      <span class="token comment">// theme example: light, dark, dark_dimmed, dark_high_contrast</span>
</span><span class="code-line">      <span class="token comment">// transparent_dark, preferred_color_scheme, custom</span>
</span><span class="code-line">      theme<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span>
</span><span class="code-line">      <span class="token comment">// theme when dark mode</span>
</span><span class="code-line">      darkTheme<span class="token operator">:</span> <span class="token string">'transparent_dark'</span><span class="token punctuation">,</span>
</span><span class="code-line">      <span class="token comment">// If the theme option above is set to 'custom`</span>
</span><span class="code-line">      <span class="token comment">// please provide a link below to your custom theme css file.</span>
</span><span class="code-line">      <span class="token comment">// example: https://giscus.app/themes/custom_example.css</span>
</span><span class="code-line">      themeURL<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
</span><span class="code-line">    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</span><span class="code-line">    utterancesConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
</span><span class="code-line">      <span class="token comment">// Visit the link below, and follow the steps in the 'configuration' section</span>
</span><span class="code-line">      <span class="token comment">// https://utteranc.es/</span>
</span><span class="code-line">      repo<span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token property-access">env</span><span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_UTTERANCES_REPO</span><span class="token punctuation">,</span>
</span><span class="code-line">      issueTerm<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// supported options: pathname, url, title</span>
</span><span class="code-line">      label<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// label (optional): Comment 💬</span>
</span><span class="code-line">      <span class="token comment">// theme example: github-light, github-dark, preferred-color-scheme</span>
</span><span class="code-line">      <span class="token comment">// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light</span>
</span><span class="code-line">      theme<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
</span><span class="code-line">      <span class="token comment">// theme when dark mode</span>
</span><span class="code-line">      darkTheme<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
</span><span class="code-line">    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</span><span class="code-line">    disqus<span class="token operator">:</span> <span class="token punctuation">{</span>
</span><span class="code-line">      <span class="token comment">// https://help.disqus.com/en/articles/1717111-what-s-a-shortname</span>
</span><span class="code-line">      shortname<span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token property-access">env</span><span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_DISQUS_SHORTNAME</span><span class="token punctuation">,</span>
</span><span class="code-line">    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</span><span class="code-line">  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</span></code></pre>
                    </div>
                    <h2 id="multiple-authors"><a href="#multiple-authors" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Multiple authors</h2>
                    <p>Information on authors is now split from <code>siteMetadata.js</code> and stored in its own
                        <code>data/authors</code> folder as a markdown file. Minimally, you will need to have a
                        <code>default.md</code> file with authorship information. You can create additional files as
                        required and the file name will be used as the reference to the author.
                    </p>
                    <p>Here's how an author markdown file might look like:</p>
                    <div class="remark-code-title">default.md</div>
                    <div class="relative">
                        <pre><code class="code-highlight language-md"><span class="code-line"><span class="token front-matter-block"><span class="token punctuation">---</span>
</span></span><span class="code-line"><span class="token front-matter-block"><span class="token language-yaml font-matter yaml"><span class="token atrule key">name</span><span class="token punctuation">:</span> Tails Azimuth
</span></span></span><span class="code-line"><span class="token front-matter-block"><span class="token language-yaml font-matter yaml"><span class="token atrule key">avatar</span><span class="token punctuation">:</span> /static/images/avatar.png
</span></span></span><span class="code-line"><span class="token front-matter-block"><span class="token language-yaml font-matter yaml"><span class="token atrule key">occupation</span><span class="token punctuation">:</span> Professor of Atmospheric Science
</span></span></span><span class="code-line"><span class="token front-matter-block"><span class="token language-yaml font-matter yaml"><span class="token atrule key">company</span><span class="token punctuation">:</span> Stanford University
</span></span></span><span class="code-line"><span class="token front-matter-block"><span class="token language-yaml font-matter yaml"><span class="token atrule key">email</span><span class="token punctuation">:</span> address@yoursite.com
</span></span></span><span class="code-line"><span class="token front-matter-block"><span class="token language-yaml font-matter yaml"><span class="token atrule key">twitter</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//twitter.com/Twitter
</span></span></span><span class="code-line"><span class="token front-matter-block"><span class="token language-yaml font-matter yaml"><span class="token atrule key">linkedin</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.linkedin.com
</span></span></span><span class="code-line"><span class="token front-matter-block"><span class="token language-yaml font-matter yaml"><span class="token atrule key">github</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com</span>
</span></span><span class="code-line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
</span><span class="code-line">
</span><span class="code-line">A long description of yourself...
</span></code></pre>
                    </div>
                    <p>You can use this information in multiple places across the template. For example in the about section
                        of the page, we grab the default author information with this line of code:</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-js"><span class="code-line"><span class="token keyword">const</span> authorDetails <span class="token operator">=</span> <span class="token keyword control-flow">await</span> <span class="token function">getFileBySlug</span><span class="token punctuation">(</span><span class="token string">'authors'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></code></pre>
                    </div>
                    <p>This is rendered in the <code>AuthorLayout</code> template.</p>
                    <h3 id="multiple-authors-in-blog-post"><a href="#multiple-authors-in-blog-post" aria-hidden="true"
                            tabindex="-1"><span class="icon icon-link"></span></a>Multiple authors in blog post</h3>
                    <p>The frontmatter of a blog post accepts an optional <code>authors</code> array field. If no field is
                        specified, it is assumed that the default author is used. Simply pass in an array of authors to
                        render multiple authors associated with a post.</p>
                    <p>For example, the following frontmatter will display the authors given by
                        <code>data/authors/default.md</code> and <code>data/authors/sparrowhawk.md</code>
                    </p>
                    <div class="relative">
                        <pre><code class="code-highlight language-yaml"><span class="code-line"><span class="token atrule key">title</span><span class="token punctuation">:</span> <span class="token string">'My first post'</span>
</span><span class="code-line"><span class="token atrule key">date</span><span class="token punctuation">:</span> <span class="token string">'2021-01-12'</span>
</span><span class="code-line"><span class="token atrule key">draft</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</span><span class="code-line"><span class="token atrule key">summary</span><span class="token punctuation">:</span> <span class="token string">'My first post'</span>
</span><span class="code-line"><span class="token atrule key">authors</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">,</span> <span class="token string">'sparrowhawk'</span><span class="token punctuation">]</span>
</span></code></pre>
                    </div>
                    <p>A demo of a multiple authors post is shown in <a
                            href="/blog/introducing-tailwind-nextjs-starter-blog">Introducing Tailwind Nextjs Starter Blog
                            post</a>.</p>
                    <h2 id="copy-button-for-code-blocks"><a href="#copy-button-for-code-blocks" aria-hidden="true"
                            tabindex="-1"><span class="icon icon-link"></span></a>Copy button for code blocks</h2>
                    <p>Hover over a code block and you will notice a GitHub-inspired copy button! You can modify
                        <code>./components/Pre.js</code> to further customise it. The component is passed to
                        <code>MDXComponents</code> and modifies all <code>&lt;pre&gt;</code> blocks.
                    </p>
                    <h2 id="line-highlighting-and-line-numbers"><a href="#line-highlighting-and-line-numbers"
                            aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Line highlighting and
                        line numbers</h2>
                    <p>Line highlighting and line numbers are now supported out of the box thanks to the new <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://github.com/timlrx/rehype-prism-plus">rehype-prism-plus plugin</a></p>
                    <p>The following javascript code block:</p>
                    <div class="relative">
                        <pre><code class="code-highlight"><span class="code-line">```js {1, 3-4} showLineNumbers
</span><span class="code-line">var num1, num2, sum
</span><span class="code-line">num1 = prompt('Enter first number')
</span><span class="code-line">num2 = prompt('Enter second number')
</span><span class="code-line">sum = parseInt(num1) + parseInt(num2) // "+" means "add"
</span><span class="code-line">alert('Sum = ' + sum) // "+" means combine into a string
</span><span class="code-line">```
</span></code></pre>
                    </div>
                    <p>will appear as:</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-js"><span class="code-line line-number highlight-line" line="1"><span class="token keyword">var</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> sum
</span><span class="code-line line-number" line="2">num1 <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'Enter first number'</span><span class="token punctuation">)</span>
</span><span class="code-line line-number highlight-line" line="3">num2 <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'Enter second number'</span><span class="token punctuation">)</span>
</span><span class="code-line line-number highlight-line" line="4">sum <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span> <span class="token comment">// "+" means "add"</span>
</span><span class="code-line line-number" line="5"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Sum = '</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span> <span class="token comment">// "+" means combine into a string</span>
</span></code></pre>
                    </div>
                    <p>To modify the styles, change the following class selectors in the <code>prism.css</code> file:</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-css"><span class="code-line"><span class="token selector"><span class="token class">.code-highlight</span></span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token atrule"><span class="token rule">@apply</span> float-left min-w-full<span class="token punctuation">;</span></span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span><span class="code-line">
</span><span class="code-line"><span class="token selector"><span class="token class">.code-line</span></span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token atrule"><span class="token rule">@apply</span> -mx-4 block border-l-4 border-opacity-0 pl-4 pr-4<span class="token punctuation">;</span></span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span><span class="code-line">
</span><span class="code-line"><span class="token selector"><span class="token class">.code-line</span><span class="token class">.inserted</span></span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token atrule"><span class="token rule">@apply</span> bg-green-500 bg-opacity-20<span class="token punctuation">;</span></span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span><span class="code-line">
</span><span class="code-line"><span class="token selector"><span class="token class">.code-line</span><span class="token class">.deleted</span></span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token atrule"><span class="token rule">@apply</span> bg-red-500 bg-opacity-20<span class="token punctuation">;</span></span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span><span class="code-line">
</span><span class="code-line"><span class="token selector"><span class="token class">.highlight-line</span></span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token atrule"><span class="token rule">@apply</span> -mx-4 border-l-4 border-primary-500 bg-gray-700 bg-opacity-50<span class="token punctuation">;</span></span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span><span class="code-line">
</span><span class="code-line"><span class="token selector"><span class="token class">.line-number</span><span class="token pseudo-element">::before</span></span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token atrule"><span class="token rule">@apply</span> mr-4 -ml-2 inline-block w-4 text-right text-gray-400<span class="token punctuation">;</span></span>
</span><span class="code-line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span></code></pre>
                    </div>
                    <h2 id="newletter-component-v113"><a href="#newletter-component-v113" aria-hidden="true"
                            tabindex="-1"><span class="icon icon-link"></span></a>Newletter component (v1.1.3)</h2>
                    <p>Introduced in v1.1.3, the newsletter component gives you an easy way to build an audience. It
                        integrates with the following providers:</p>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://mailchimp.com/">Mailchimp</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://buttondown.email/">Buttondown</a>
                        </li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://convertkit.com/">Convertkit</a></li>
                    </ul>
                    <p>To use it, specify the provider which you are using in the config file and add the necessary
                        environment variables to the <code>.env</code> file. For more information on the required variables,
                        check out <code>.env.sample.</code></p>
                    <p>Two components are exported, a default <code>NewsletterForm</code> and a
                        <code>BlogNewsletterForm</code> component, which is also passed in as an MDX component and can be
                        used in a blog post:
                    </p>
                    <div class="relative">
                        <pre><code class="code-highlight language-jsx"><span class="code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BlogNewsletterForm</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Like what you are reading?<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
</span></code></pre>
                    </div>
                    <div class="flex items-center justify-center">
                        <div class="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
                            <div>
                                <div class="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Like what you are
                                    reading?</div>
                                <form class="flex flex-col sm:flex-row">
                                    <div><label class="sr-only" for="email-input">Email address</label><input
                                            autocomplete="email"
                                            class="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                                            id="email-input" name="email" placeholder="Enter your email" required=""
                                            type="email" data-listener-added_38dd9ae1="true"></div>
                                    <div class="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3"><button
                                            class="w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"
                                            type="submit">Sign up</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p>The component relies on nextjs's <a target="_blank" rel="noopener noreferrer"
                            href="https://nextjs.org/docs/api-routes/introduction">API routes</a> which requires a
                        server-side instance of nextjs to be setup and is not compatible with a 100% static site export.
                        Users should either self-host or use a compatible platform like Vercel or Netlify which supports
                        this functionality.</p>
                    <p>A static site compatible alternative is to substitute the route in the newsletter component with a
                        form API endpoint provider.</p>
                    <h2 id="bibliography-and-citations-v121"><a href="#bibliography-and-citations-v121" aria-hidden="true"
                            tabindex="-1"><span class="icon icon-link"></span></a>Bibliography and Citations (v1.2.1)</h2>
                    <p><code>rehype-citation</code> plugin is added to the xdm processing pipeline in v1.2.1. This allows
                        you to easily format citations and insert bibliography from an existing bibtex or CSL-json file.</p>
                    <p>For example, the following markdown code sample:</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-md"><span class="code-line">Standard citation [@Nash1950]
</span><span class="code-line">In-text citations e.g. @Nash1951
</span><span class="code-line">Multiple citations [see @Nash1950; @Nash1951, page 50]
</span><span class="code-line">
</span><span class="code-line"><span class="token bold"><span class="token punctuation">**</span><span class="token content">References:</span><span class="token punctuation">**</span></span>
</span><span class="code-line">
</span><span class="code-line">[^ref]
</span></code></pre>
                    </div>
                    <p>is rendered to the following:</p>
                    <p>Standard citation <span id="citation--nash1950--1">(Nash, 1950)</span><br>In-text citations e.g.
                        <span id="citation--nash1951--2">Nash (1951)</span><br>Multiple citations <span
                            id="citation--nash1950--nash1951--3">(see Nash, 1950, 1951, p. 50)</span>
                    </p>
                    <p><strong>References:</strong></p>
                    <div class="csl-bib-body references" id="refs">
                        <div class="csl-entry" id="bib-nash1950">Nash, J. (1950). Equilibrium points in n-person games.
                            <i>Proceedings of the National Academy of Sciences</i>, <i>36</i>(1), 48–49.
                        </div>
                        <div class="csl-entry" id="bib-nash1951">Nash, J. (1951). Non-cooperative games. <i>Annals of
                                Mathematics</i>, 286–295.</div>
                    </div>
                    <p>A bibliography will be inserted at the end of the document, but this can be overwritten by specifying
                        a <code>[^Ref]</code> tag at the intended location. The plugin uses APA citation formation, but also
                        supports the following CSLs, 'apa', 'vancouver', 'harvard1', 'chicago', 'mla', or a path to a
                        user-specified CSL file.</p>
                    <p>See <a target="_blank" rel="noopener noreferrer"
                            href="https://github.com/timlrx/rehype-citation">rehype-citation readme</a> for more information
                        on the configuration options.</p>
                    <h2 id="self-hosted-font-v150"><a href="#self-hosted-font-v150" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Self-hosted font (v1.5.0)</h2>
                    <p>Google font has been replaced with self-hosted font from <a target="_blank" rel="noopener noreferrer"
                            href="https://fontsource.org/">Fontsource</a>. This gives the following <a target="_blank"
                            rel="noopener noreferrer" href="https://fontsource.org/docs/introduction">advantages</a>:</p>
                    <blockquote>
                        <p>Self-hosting brings significant performance gains as loading fonts from hosted services, such as
                            Google Fonts, lead to an extra (render blocking) network request. To provide perspective, for
                            simple websites it has been seen to double visual load times.</p>
                        <p>Fonts remain version locked. Google often pushes updates to their fonts without notice, which may
                            interfere with your live production projects. Manage your fonts like any other NPM dependency.
                        </p>
                        <p>Commit to privacy. Google does track the usage of their fonts and for those who are extremely
                            privacy concerned, self-hosting is an alternative.</p>
                    </blockquote>
                    <p>This leads to a smaller font bundle and a 0.1s faster load time (<a target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.webpagetest.org/video/compare.php?tests=220201_AiDcFH_f68a69b758454dd52d8e67493fdef7da,220201_BiDcMC_bf2d53f14483814ba61e794311dfa771">webpagetest
                            comparison</a>).</p>
                    <p>To change the default Inter font:</p>
                    <ol>
                        <li>Install the preferred <a target="_blank" rel="noopener noreferrer"
                                href="https://fontsource.org/fonts">font</a> -
                            <code>npm install -save @fontsource/&lt;font-name&gt;</code>
                        </li>
                        <li>Update the import at <code>pages/_app.js</code>-
                            <code>import '@fontsource/&lt;font-name&gt;.css'</code>
                        </li>
                        <li>Update the <code>fontfamily</code> property in the tailwind css config file</li>
                    </ol>
                    <h2 id="upgrade-guide"><a href="#upgrade-guide" aria-hidden="true" tabindex="-1"><span
                                class="icon icon-link"></span></a>Upgrade guide</h2>
                    <p>There are significant portions of the code that has been changed from v0 to v1 including support for
                        layouts and a new mdx engine.</p>
                    <p>There's also no real reason to change if the previous one serves your needs and it might be easier to
                        copy the component changes you are interested in to your existing blog rather than migrating
                        everything over.</p>
                    <p>Nonetheless, if you want to do so and have not changed much of the template, you could clone the new
                        version and copy over the blog post over to the new template.</p>
                    <p>Another alternative would be to pull the latest template version with the following code:</p>
                    <div class="relative">
                        <pre><code class="code-highlight language-bash"><span class="code-line"><span class="token function">git</span> remote <span class="token function">add</span> template git@github.com:timlrx/tailwind-nextjs-starter-blog.git
</span><span class="code-line"><span class="token function">git</span> pull template v1 --allow-unrelated-histories
</span><span class="code-line"><span class="token function">rm</span> -rf node_modules
</span></code></pre>
                    </div>
                    <p>You can see an example of such a migration in this <a target="_blank" rel="noopener noreferrer"
                            href="https://github.com/timlrx/timlrx.com/commit/bba1c185384fd6d5cdaac15abf802fdcff027286">commit</a>
                        for my personal blog.</p>
                    <p>v1 also uses <code>feed.xml</code> rather than <code>index.xml</code>, to avoid some build issues
                        with Vercel. If you are migrating you should add a redirect to <code>next.config.js</code> like so:
                    </p>
                    <div class="relative">
                        <pre><code class="code-highlight language-js"><span class="code-line"><span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
</span><span class="code-line">  <span class="token keyword control-flow">return</span> <span class="token punctuation">[</span>
</span><span class="code-line">    <span class="token punctuation">{</span>
</span><span class="code-line">      source<span class="token operator">:</span> <span class="token string">'/:path/index.xml'</span><span class="token punctuation">,</span>
</span><span class="code-line">      destination<span class="token operator">:</span> <span class="token string">'/:path/feed.xml'</span><span class="token punctuation">,</span>
</span><span class="code-line">      permanent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</span><span class="code-line">    <span class="token punctuation">}</span>
</span><span class="code-line">  <span class="token punctuation">]</span>
</span><span class="code-line"><span class="token punctuation">}</span>
</span></code></pre>
                    </div>
                    <section class="footnotes" data-footnotes="true">
                        <h2 id="footnote-label" class="sr-only"><a href="#footnote-label" aria-hidden="true"
                                tabindex="-1"><span class="icon icon-link"></span></a>Footnotes</h2>
                        <ol>
                            <li id="user-content-fn-1">
                                <p>With the new changes in Nextjs 12, first load JS increase to 45kB. <a
                                        href="#user-content-fnref-1" aria-label="Back to content"
                                        class="data-footnote-backref" data-footnote-backref="true">↩</a></p>
                            </li>
                        </ol>
                    </section>
                </div>
            </div>
            <div id="comment">
                <div class="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"><button>Load Comments</button>
                <div class="giscus" id="comments-container"></div>
            </div>
        </div>
        <footer>
            <div class="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                <div class="pt-4 xl:pt-8"><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        href="/blog/nested-route/introducing-multi-part-posts-with-nested-routing">← Introducing
                        Multi-part Posts with Nested Routing</a></div>
            </div>
        </footer>
    </div>
</main></template>
