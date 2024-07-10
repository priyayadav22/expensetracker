"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
    const { data } = useSession();
    const router = useRouter();

    if (!data) {
        router.push("/login");
        return;
    }

    return (
        <div>
            {data.user && data.user.image && (
                <img src={data.user?.image} alt="" />
            )}
            <p>Welcome {data.user?.name}. Signed In As:</p>
            <p>{data.user?.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    );
};

export default DashboardPage;
