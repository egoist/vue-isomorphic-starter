<style>
nav {
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width : 100%;
        height: 70px;
        margin-bottom: 40px;
        color: rgba(0, 0, 0, 0.8);
        font-weight: bold;
        text-shadow: 0 1px 0 #fff;
        background: #fafafa;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        .brand {
            flex: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 66px;
                height: 66px;
            }
            span {
                margin-left: 20px;
            }
        }
        .nav-item {
            flex: 8;
            ul {
                float: right;
            }
            li {
                display: inline-block;
                list-style: none;
            }
        }
        &::after,
        &::before {
            position: absolute;
            z-index: -1;
            top: 10px;
            bottom: 15px;
            left: 10px;
            width: 50%;
            content: "";
            box-shadow: 0 15px 10px rgba(0, 0, 0, 0.5);
            transform: rotate(-1.5deg);
        }
        &::after {
            right: 10px;
            left: auto;
            transform: rotate(1.5deg);
        }
        a {
            padding: 20px;
            color: #4FC08D;
            &:hover {
                color: rgb(176, 62, 114);
            }
            &.router-link-active {
                box-shadow: inset 0 1px 0 rgba( 79, 143, 141, 0.6);
            }
        }
        .placeholder {
            flex: none;
            width: 100px;
        }
    }
}
</style>

<template lang="html">
    <nav>
        <div class="container">
            <div class="brand">
                <img src="../assets/img/logo.png" alt="logo" />
                <span>Vue-Isomorphic-Starter</span>
            </div>
            <div class="nav-item">
                <ul>
                    <li>
                        <router-link to="/" exact>
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/counter" exact>
                            Counter
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" exact>
                            About
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="placeholder">

            </div>
        </div>
    </nav>
</template>
