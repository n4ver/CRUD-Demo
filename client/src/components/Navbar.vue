<template>
    <header>
            <div id="head" class="justify-center">
                <div id="head-wrapper" class="flex-none h-full w-full flex-nowrap">
                    <div id="nav-bar" class="flex items-center bg-gradient-to-r from-indigo-500 gap-4 h-16 px-1 uppercase">
                        <div id="nav-bar-inner" class="flex-auto gap-6 text-white">
                            <router-link to="/" title="Home" class="text-xl px-4 tracking-wider">Home</router-link>
                            <router-link to="/complaints" title="Browse" class="text-xl px-4 tracking-wider">Browse</router-link>
                            <router-link to="/submit" title="Submit" class="text-xl px-4 tracking-wider">Submit</router-link>
                        </div>
                        <div id="login-bar" class="flex pr-4">
                            <router-link to="/login" title="Log in" class="text-xl text-indigo-900 tracking-wider">Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
