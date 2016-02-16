---
layout: docs
title: Typography
permalink: /docs/typography/
---

<section id="headings">
    <div class="info column-1-2 column-small-1">
        <h3>Headings</h3>
        <p>In fort you can use both <code>h1 h2 h3 h4 h5 h6</code> heading tags as well as <code>.h1 .h2 .h3 .h4 .h5</code> heading classes to style headings. The classes can be applied to other elements such as a <code>&lt;span&gt;</code> or to overwride a heading tags style.</p>
        <h1>h1 Title <small>h1 Small</small></h1>
        <h2>h2 Title <small>h2 Small</small></h2>
        <h3>h3 Title <small>h3 Small</small></h3>
        <h4>h4 Title <small>h4 Small</small></h4>
        <h5>h5 Title <small>h5 Small</small></h5>
        <span class="h6">h6 Title <small>h6 Small</small></span>
        <h1 class="h5">h1 Title <small>h1 Small</small></h1>

    </div>
    <div class="code column-1-2 column-small-1">
{% highlight html %}
<h1> ... <small> ... </small></h1>
<h2> ... <small> ... </small></h2>
<h3> ... <small> ... </small></h3>
<h4> ... <small> ... </small></h4>
<h5> ... <small> ... </small></h5>

<span class="h6"> ... <small> ... </small></span>

<h1 class="h5"> ... <small> ... </small></h1>
{% endhighlight %}
    </div>
</section>

<section id="paragraph">
    <div class="info column-1-2 column-small-1">
        <h3>Paragraph</h3>
        <p class="lead">A lead paragraph has a slightly larger text size.</p>
        <p>Fort is a <em>frontend framework</em> built with <strong>SCSS</strong> and originally ported from Turret by Scott de Jonge.</p>

    </div>
    <div class="code column-1-2 column-small-1">
{% highlight html %}
<p class="lead"> ... </p>

<p><em>emphasis</em> <strong>strong</strong></p>
{% endhighlight %}
    </div>
</section>

<section id="blocks">
    <div class="info column-1-2 column-small-1">
        <h3>Blocks</h3>
        <p>By default the blockquote citation floats to the right, you can float it to the left by adding the class <code>.left</code>.</p>
        <blockquote>
            <p>Simplicity is the ultimate sophistication.</p>
            <cite>Leonardo da Vinci</cite>
        </blockquote>
        <p class="pullout">Fort is a frontend framework built with SCSS and originally ported from Turret by Scott de Jonge.</p>
        <p><code>&lt;p&gt;Smile, breathe, and go slowly. - Thich Nhat Hanh&lt;/p&gt;</code></p>
        <pre><code>&lt;p&gt;Smile, breathe, and go slowly. - Thich Nhat Hanh&lt;/p&gt;</code></pre>
        <p>Save Page As.. <kbd>&#8984;</kbd>+<kbd>S</kbd></p>
    </div>
    <div class="code column-1-2 column-small-1">
{% highlight html %}
<blockquote>
    <p>Simplicity is the ultimate sophistication.</p>
    <cite>Leonardo da Vinci</cite>
</blockquote>
{% endhighlight %}
{% highlight html %}
<p class="pullout">Fort is a frontend framework built with SCSS and originally ported from Turret by Scott de Jonge.</p>
<code><p>Smile, breathe, and go slowly. - Thich Nhat Hanh</p></code>
<pre><code><p>Smile, breathe, and go slowly. - Thich Nhat Hanh</p></code></pre>
Save Page As.. <kbd>⌘</kbd> + <kbd>S</kbd>
{% endhighlight %}
    </div>
</section>

<section id="alerts">
    <div class="info column-1-2 column-small-1">
        <h3>Blocks</h3>
        <p>Alert messages can be shown using the <code>.alert</code> class, error, info, success and warning alerts exist.</p>
        <p class="alert">Unstyled alert message</p>
        <p class="alert error">Error styled alert message</p>
        <p class="alert info">Info styled alert message</p>
        <p class="alert success">Success styled alert message</p>
        <p class="alert warning">Warning styled alert message</p>
    </div>
    <div class="code column-1-2 column-small-1">
{% highlight html %}
<p class="alert">Unstyled alert message</p>

<p class="alert error">Error styled alert message</p>

<p class="alert info">Info styled alert message</p>

<p class="alert success">Success styled alert message</p>

<p class="alert warning">Warning styled alert message</p>
{% endhighlight %}
    </div>
</section>




