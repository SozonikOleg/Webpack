import React, { Suspense } from 'react';
import {createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {App} from './components/App/App';
import { About } from '@/pages/About';
import { Shop } from '@/pages/Shop';


const root = document.getElementById("root")

if(!root){
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element:  <Suspense fallback={'Loading...'}><About /></Suspense>
            },
            {
                path: '/shop',
                element:
                   <Suspense fallback={'Loading...'}><Shop /></Suspense>
            }
        ]
    },
]);

container.render(<RouterProvider router={router} />)
