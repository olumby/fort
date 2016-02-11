---
layout: docs
title: Documentation
permalink: /docs/grid/
---

<section class="" id="grid">
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
    </div>
</section>

<section class="" id="gutters">
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
    </div>
</section>
