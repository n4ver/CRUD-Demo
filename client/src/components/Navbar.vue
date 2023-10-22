<template>
    <header>
            <div id="head" class="justify-center">
                <div id="head-wrapper" class="flex-none h-full w-full flex-nowrap">
                    <div id="nav-bar" class="flex items-center bg-gradient-to-r from-indigo-500 gap-4 h-16 px-1 uppercase">
                        <div id="nav-bar-inner" class="flex-auto gap-6 text-white">
                            <a href="/" title="Home" class="text-xl px-4 tracking-wider">Home</a>
                            <a href="/about" title="About" class="text-xl px-4 tracking-wider">About</a>
                            <a href="/stats" title="Tournament Statistics" class="text-xl px-4 tracking-wider">Stats</a>
                        </div>
                        <div id="login-bar" class="flex pr-4">
                            <a href="/login" title="Log in" class="text-xl text-indigo-900 tracking-wider">Login</a>
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
