# Next.js 15 Navigation Error: Missing `revalidate` option

This repository demonstrates a common error encountered in Next.js 15 applications when navigating between pages that utilize `getServerSideProps` or `getStaticProps` without specifying the `revalidate` option.  Failure to include this option can lead to stale data or unexpected behavior.

## Problem
The `about.js` file attempts to use `getServerSideProps` without revalidation settings, causing an error.  The application will likely fail to render correctly or throw an error upon navigation.

## Solution
The solution involves adding a `revalidate` property to the `getServerSideProps` function.  This tells Next.js how often to re-fetch the data.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.  You should encounter an error.
5. Modify `about.js` to include `revalidate`.  Rerun the dev server and try navigation again.
