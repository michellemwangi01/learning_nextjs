# SETUP & INSTALLATION

1. cd into the project folder
2. run `npx create-next-app@latest`
3. accept all the prompts except for using tsx (unless you now know typescript)and for customizing the default import alias
4.

# ROUTING

## Folder naming concentions

1. folders with underscores(\_) are private folders.
2. folders with square brackets [] imply identifier folders those that hold dynamic route paths
3. folders with parentheses () identify route groups and so the name is omitted from the url path

## LAYOUTS

1. Are usded to define specific layouts for different pages. They can be defined for multiple pages i.e a layout for each page, but more likely, a layout for multiple pages.
2. They are also mostly the server components, so server information such as metadata can be stored there
3. Pass the prop children into the layout in oder to pass the contents of the page.jsx into the main section of the layout

## NAVIGATION

### Navigating using Links

`import Link from "next/link" <Link href="/blog">Blog</Link>`
This will navigate the user to the blog page

### Dynamic Navigation

`` <Link href={`products/${productId}`}>product {productId}</Link> ``
We can pass dynamic values to the url so that it changes for example depending on the product that has been clicked which has its own ID.

### Navigating Programatically

`import { useRouter } from "next/navigation";` import the useRouter hook
`const router = useRouter();` instantiate the router
`router.push("/")` Navigates the user to the new page once they click a button or trigger an event
`router.back()` Navigates the user back to the last page of the URL stack.
`router.forward()` Navigates to the next page after navigating back

## TEMPLATES

Templates are like layouts except they do not preserve state. When a user navigates to another page, a layout will generally only rerender anything that has changed, A template on the other hand, rerenders everything

## SPECIAL FILES

1.  `page.jsx/tsx` - page that contains the content that will be loaded by a specific url
2.  `layout.jsx/tsx` - page that governs the layout of one or multiple pages. receives children as a prop
3.  `template.jsx/tsx` - same as layout, but when reloaded or when a user changes page, it rerenders everything
4.  `not-found.jsx/tsx` - automated of any pages whose URLs are not valid
5.  `loading.jsx/tsx` - page that is used as theloading content indicator
