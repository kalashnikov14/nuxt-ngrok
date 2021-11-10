<template>
  <div>
    <h1>Hello, world!</h1>
    <p>lets get started</p>
    <hr />
    <p></p>
    <p>
      URL from ngrok: <a :href="$config.ngrok.url">{{ $config.ngrok.url }}</a>
    </p>
  </div>
</template>