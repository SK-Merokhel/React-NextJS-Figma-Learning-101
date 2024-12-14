## Why Don't We Work on React.js for Making a Whole Website?
Next.js is a framework for React.js that simplifies the development process by providing essential features like server-side rendering and static site generation, making it more efficient for building complete web applications.

## How to Work on Next.js
Next.js documentation is very well-structured and provides a comprehensive guide for developers. You can find it on the official Next.js website.

## Understanding React Components
A React component is essentially a function that returns a piece of UI. 

## TSX (TypeScript + XML)
TSX is the syntax used in React components that allows you to write XML-like code within TypeScript.

# Component:

Component is a especial type of function, tsx extension makes this possible where we used ts and html together. we use this in page.tsx file.

In next.js we don't name this as function,

function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    </div>

instead we name it as component, this e.g we have a Home component 
These component have some set of rules:
1) Name of the component needs to be in PascalCase
2) This needs to be export default 
3) This will return single HTML element. In div we can embend many elements as Dive is a single HTML element and in contiain other elements but will be counted as only one element which is div. we can also use fragment, it is optional written as <>other valuable element</>

# What will be discover in next.js

1) React Component: Here we can return HTML. It understand HTML.

2) Routing : All of the routing is in app folder, routing is basically our page, in the form of page.tsx. As we do npm run dev, our local host is getting used and we get a page display. All this comes in routing. 

# There is a 4 pillars of React.js

1) Declarative Approach
2) Components Architectures
3) Unidirectional Data Flow
4) UI Library

## There is two Approaches

1) Imperative
2) Declarative

### What is Imperative Approach?

Ans: Imperative source programming mein wo hoti hai jisme aap step-by-step instructions dete ho computer ko ke kaise kaam ko perform karna hai. Isme aap batate ho ke "ye kaam karo," "phir ye karo," aur aise instructions ka sequence follow hota hai jo bht complex hota tha.

### What is Declarative Approach?

Ans: Declarative programming mein aapko ye batane ki zarurat nahi hoti ke har kaam kaise kiya jaye. Aap sirf ye batate ho kya karna hai, aur kaise karna hai wo computer khud samajhta hai. Isme focus steps ke sequence par nahi hota, balki aap desired result ya outcome ko define karte ho.

## What are difference between Imperative and Declarative Approaches?

Ans: Imperative approach me Aap har step batate ho (kaise kaam karna hai).
Declarative approach me Aap sirf result batate ho (kya karna hai), aur kaise karna hai wo system khud decide karta hai.

# What is Component Architecture?

Ans: React mein sab kuch components ke zariye banaya jata hai. Components ek tarah se web page ke chhote tukde hote hain, jo independently kaam karte hain. Yeh reusable blocks hote hain jinko bar-bar use kiya ja sakta hai. Har component apna structure, style, aur behavior define karta hai.

# What is Unidirectional data Flow?

Ans: Unidirectional data ka mtlb ye hai k wo neeche ki taraf flow krta hai or use hamesha parent element me rkhna chahye or wo child ko transfer kr skta hai lekin agr dusri jagah bh mujhe ushi data ki zaroorat hai to iska matlab ye hai k mene data sahi jagah nh rkha mujhe uski or upper wale level pr apna data rkhna hoga bar bar manuplate nh krna hoga. iski direction down ki taraf hoti hai.

# What is UI library?

Ans: React itself ek UI library hai, lekin yeh sirf basic structure banane ke liye hai. Isme aapko ready-made components jaise buttons, forms, tables, modals, etc., nahi milte. Is problem ko solve karne ke liye kuch additional UI libraries banayi gayi hain jo React ke sath kaam karti hain aur aapko complex components banane ke liye pre-built components provide karti hain.

# What is difference between framework or library?

Ans: Library aur Framework programming ke tools hain jo developers ka kaam asaan banate hain, lekin dono mein ek basic farq hota hai. Main farq ye hai ke:

Library: Ye ek set of pre-written code ka collection hota hai jo specific tasks ko simplify karta hai.

Framework: Ye ek complete structure hota hai jo aapki application ka poora flow control karta hai.

# Why we use Next.js

Ans: React.js ek powerful UI library hai jo front-end development ke liye kaafi useful hai, lekin jab hume server-side rendering, routing, ya static site generation jaisi cheezon ki zarurat hoti hai to React akela enough nahi hota. Us situation mein Next.js best choice hai, kyunki yeh React ke upar built hai aur additional features jaise SSR, file-based routing, aur API routes provide karta hai. Yeh sab cheezein app ko zyada performant aur scalable banati hain, jo aaj ke modern web applications ke liye zaruri hai.

