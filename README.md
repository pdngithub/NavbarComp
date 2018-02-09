# NavbarComp

## Genesis

While exploring bootstrap (version 3, I'm afraid, but I don't think that limits what I found) using angular 2+ I came up with the notion of putting the various pieces of a `<nav>` element into separate components for reusability and ease of substitution. I had copied a sample navbar from w3schools.com, and it contained a span marked with the class .sr-only (screen-reader only) that said "current". The sample html was not "live", i.e. it was not dynamic, and I wanted to see whether that span switched with the current nav item. A .sr-only item is invisible, so I came up with the idea of putting a visible "current item" marker in the navbar¹. I chose an asterisk (`<span class="glyphicon glyphicon-asterisk"></span>`) as the visibile current nav item marker. 

Navigation bars are written in bootstrap with a `<nav>` tag surrounding `<div>` tags marked with various classes,  ultimately surrounding a `<ul>` tag. The `<li>` elements in this unordered list are the menu items (see (https://www.w3schools.com/bootstrap/bootstrap_navbar.asp) for the html I used as my base). As I was working I was struck by how much html I was copying-and-pasting. When I needed to change something in the individual menu elements as I was experimenting, I had to change a bunch of `<li>` elements. I then asked whether I could avoid repeating myself (DRY) using angular.

¹Those of you who are more comfortable with css will realize that that I could have easily overridden the .sr-only class in the component, making it visible by undoing bootstrap's css. But I assumed that that it needed to be invisible to work.

## Running Code

A running copy of this project is available at: https://codesandbox.io/s/github/pdngithub/NavbarComp/tree/master/. 

Note that the menu is reactive, so if the window isn't wide enough it will replace the regular navbar with a "burger menu." Widen the window to see the regular navbar.

## First Implementations

### `*ngFor` loop works, but...

My first attempt to implement the `<li>` in the `<nav>` using `*ngFor` loops. As you might expect this worked fine. I didn't have to repeat individual elements, and I could change everything in one place. But the refactoring tick had dug into my skin. I wanted to refactor layers of the `<nav>` into separate angular components so I could assemble them.

### Naive tag component flummoxes bootstrap

I started naively by writing a separate component using the default angular selector type. If you create a component using angular cli, it creates the component with a tag selector, that is you add the component by putting a tag with that name in the html (e.g. `<app-nav-bar>`, used in app.component.html in this project). Below is the selector as defined in nav-bar.component.ts:

    @Component({
      selector: 'app-nav-bar',
      templateUrl: './nav-bar.component.html',
      styleUrls: ['./nav-bar.component.css']
    })
    export class NavBarComponent implements OnInit {

For the outer `<nav>` component this is fine, but when the tag selector is used on inner pieces of the navbar, the new tags interfere with the css selectors defined in bootstrap. There are a number that use a parent selector between html elements. With the new tag elements inserted, this bootstrap css no longer worked. The bootstrap navbar was broken. My knee-jerk response was to copy all the bootstrap css and add the new custom tags as selectors. As I thought about it, there could also be selectors in the bootstrap javascript that would need to be updated too. I decided to do some research.

## Final Implementation

### Attribute selectors

It turns out that the angular selector uses the same syntax as a css selector. The tag selector implemented by default by angular cli is just one type of selector. There is also an attribute selector, and a custom attribute can be applied to a well-known tag such as a `<ul>` tag or a `<li>` tag to convert it into an angular component. Below is a `<li>` element with an attribute component applied. The contents of this 

    <li 
      ...
      app-nav-bar-list-item
      ...
    >
      <!-- the contents of component with selector [app-nav-bar-list-item] go here -->
    </li>

To convert a component from a tag selector to an attribute selector, just add square brackets to the selector specification:

    @Component({
      selector: '[app-nav-bar-list-item]',
      templateUrl: './nav-bar-list-item.component.html',
      styleUrls: ['./nav-bar-list-item.component.css']
    })
    export class NavBarListItemComponent implements OnInit {
        ...

Because all the normal tags are in the right place, bootstrap works as expected. With everything split into angular components, the navbar components can be edited or replaced individually.

### Getting attributes right

On the unordered list there is still an `*ngFor` loop, but this time in the nav-bar-unordered-list.component.html. The values from this loop have to be passed down from parent component to child components because the html is no longer in the same file. This is done by giving the child elements `@Input()` properties and assigning attributes on the html tags. In this example I tried to avoid using the same property names on the components (at one point using `navBarItemsUl` because `navBarItems` had already been used) to make it clear (mostly to myself) which name was on the parent component and which was on the current component.

## Aftermath

### Is this necessary?

Perhaps this is over-engineered. Having the entire navbar in one component with an `*ngFor` loop isn't the worst solution in the world. But I like the idea of being able to swap out elements at various levels. Perhaps in one place I need a navbar that has an asterisk next to the currently selected item in the navbar, while in another I don't. I could copy and paste the entire navbar, but I would really like to be able to have a standard set of navbar components that I could reuse.

### Is there a way to configure the inner components?

Right now as soon as you choose the top component, all the child components are pre-determined. It would be nice to be able to configure the navbar to use different components easily. I don't know of a way to do this yet, but the answer may be related to the next point.

### Other selectors for angular components

Can you use selectors other than tag & attribute for angular components? The answer is, I believe, yes. My understanding is that the full css selector syntax is available, including, for example, id selectors such as `#myParticularNavbar`. I suspect that this can be used to allow using the preferred inner component, but that is a project for another day.