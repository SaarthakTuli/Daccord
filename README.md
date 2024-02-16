This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

.env
```bash
###### =========== CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=XXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXX

NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /


###### =========== SUPABASE
NEXT_PUBLIC_SUPABASE_URL=XXXXXXXXX
NEXT_PUBLIC_SUPABASE_ANON_KEY=XXXXXXXX
DATABASE_URL=XXXXXXXX

###### =========== UPLOADTHING
UPLOADTHING_SECRET=sk_test_XXXXXXXX
UPLOADTHING_APP_ID=XXXXXXXX

###### =========== LiveKit
LIVEKIT_API_KEY=XXXXXXXX
LIVEKIT_API_SECRET=XXXXXXXX
NEXT_PUBLIC_LIVEKIT_URL=wss://XXXXXXXX
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
