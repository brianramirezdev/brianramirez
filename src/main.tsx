import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { z } from 'zod';
import App from '@/App.tsx';

const UserSchema = z.object({
    username: z.string(),
    age: z.number(),
    birthday: z.date(),
    isProgrammer: z.boolean().default(false),
    hobby: z.enum(['reading', 'coding', 'sleeping']),
    test: z.undefined().optional().optional(),
    test2: z.null().optional(),
    test3: z.never().optional(),
    test4: z.any().optional(),
    test5: z.unknown().optional(),
});

type User = z.infer<typeof UserSchema>;

const user: User = { username: 'John Doe', age: 30, birthday: new Date(), isProgrammer: true, hobby: 'coding',  };

console.log(UserSchema.safeParse(user).success);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
