<script context="module">
	export async function preload(page, session) {
		let { auth } = session
		if (auth) return this.redirect(200, "/")
	}
</script>

<script>
    import { stores } from "@sapper/app"
    const { session } = stores()
    let email = 'some-mail@mail.co', password = 'somethingsecret'

    const hendleSignin = async () => {
        let bodyReq = {email, password}
        let objeckOfLC = {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(bodyReq),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const loginCheck = await fetch('myexportfunction/authcheck', objeckOfLC).then(
            res => res.json()
        ).catch(
            error => { return error }
        )
        if(loginCheck.success == true){
            $session.auth = loginCheck.auth
        }
    }

    const hendleCekSession = () => {
        console.log($session.auth)
    }

    const hendleClearSession = () => {
        $session.auth = null
    }
</script>

<svelte:head>
	<title>Simple CMS - Login Page</title>
</svelte:head>

<div>
    <div
        class=" bg-blue-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full">
            <form on:submit|preventDefault="{hendleSignin}" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <img
                        class="mx-auto h-40 w-auto"
                        src="https://icon-library.com/images/user-icon-png-transparent/user-icon-png-transparent-23.jpg"
                        alt="Workflow" />
                    <h2
                        class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Welcome to Simple CMS
                    </h2>
                </div>
                <div class="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="email">
                        Email
                    </label>
                    <input
                        bind:value="{email}"
                        required
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email" />
                </div>
                <div class="mb-4">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password">
                        Password
                    </label>
                    <input
                        bind:value="{password}"
                        required
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password" />
                </div>
                <div class="mb-4">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Signin
                    </button>
                    <button on:click|preventDefault="{hendleCekSession}" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                        Cek Session
                    </button>
                    <button on:click|preventDefault="{hendleClearSession}" class="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                        Clear Session
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
