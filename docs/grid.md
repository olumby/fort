---
layout: docs
title: Documentation
permalink: /docs/grid/
---

<section id="grid">
    <div class="info column-1-2 column-small-1">
        <h2>Grid</h2>
        <p>A basic fort grid uses a container, multiple rows and multiple columns.</p>
        <p>A container resizes itself depending on the screen size. A row breaks the grid onto a new row and a column splits the grid horizontally.</p>
        <p>Columns use fractions for sizing, starting as <code>.column-1</code> as the largest and <code>.column-1-12</code> as the smallest. Fractions are available from halves to twelfths.</p>
    </div>
    <div class="code column-1-2 column-small-1">
{% highlight html %}
<div class="container">
    <div class="row">
        <div class="column-1-2"></div>
        <div class="column-1-4"></div>
        <div class="column-1-4"></div>
    </div>
    <div class="row">
        <div class="column-1-2"></div>
        <div class="column-1-2"></div>
    </div>
</div>
{% endhighlight %}
        <div class="container grid-demo">
            <div class="row">
                <div class="column-1-3"><div class="demo">...</div></div>
                <div class="column-1-3"><div class="demo">...</div></div>
                <div class="column-1-3"><div class="demo">...</div></div>
            </div>
            <div class="row">
                <div class="column-1-2"><div class="demo">...</div></div>
                <div class="column-1-2"><div class="demo">...</div></div>
            </div>
        </div>
    </div>
</section>

<section id="gutters">
    <div class="info column-1-2 column-small-1">
        <h3>Gutters</h3>
        <p>Gutters provide padding around columns, the default gutter size can be set by overriding the <code>$gutter</code> variable or <code>$gutter-(breakpoint)</code> variables.</p>
        <p>Gutters can be disabled on a column using the <code>.no-gutters</code> class.</p>
    </div>
    <div class="code column-1-2 column-small-1">
{% highlight scss %}
$gutter: 2rem;
$gutter-medium: 2.2rem;
{% endhighlight %}
{% highlight html %}
<div class="column-1 no-gutter">No gutters</div>
{% endhighlight %}
        <div class="container grid-demo">
            <div class="row">
                <div class="column-1-3 no-gutter"><div class="demo">...</div></div>
                <div class="column-1-3 no-gutter"><div class="demo">...</div></div>
                <div class="column-1-3 no-gutter"><div class="demo">...</div></div>
            </div>
            <div class="row">
                <div class="column-1-2 no-gutter"><div class="demo">...</div></div>
                <div class="column-1-2 no-gutter"><div class="demo">...</div></div>
            </div>
        </div>
    </div>
</section>

<section id="responsive">
    <div class="info column-1-2 column-small-1">
        <h3>Responsive</h3>
        <p>Separate grids exist for five breakpoints (xsmall, small, medium, large and xlarge). These breakpoints allow you to change the behavior of a column depending on the size of the screen.</p>
        <p>For example four divs with the classes <code>.column-1-4.column-medium-1-2.column-small-1</code> will appear as 4 columns on large screens, 2 columns on medium sized screens and 1 column on small screens.</p>
    </div>
    <div class="code column-1-2 column-small-1">
{% highlight html %}
<div class="column-1-4 column-medium-1-2 column-small-1">...</div>
<div class="column-1-4 column-medium-1-2 column-small-1">...</div>
<div class="column-1-4 column-medium-1-2 column-small-1">...</div>
<div class="column-1-4 column-medium-1-2 column-small-1">...</div>
{% endhighlight %}
        <div class="container grid-demo">
            <div class="row">
                <div class="column-1-4 column-medium-1-2 column-small-1"><div class="demo">...</div></div>
                <div class="column-1-4 column-medium-1-2 column-small-1"><div class="demo">...</div></div>
                <div class="column-1-4 column-medium-1-2 column-small-1"><div class="demo">...</div></div>
                <div class="column-1-4 column-medium-1-2 column-small-1"><div class="demo">...</div></div>
            </div>
        </div>
    </div>
</section>
