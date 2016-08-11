fs = require 'fs'

{spawn} = require 'child_process'

build = (callback) ->
  coffee = spawn './node_modules/coffee-script/bin/coffee', ['-o', 'dist/', '-c', 'src/microTK.coffee']
  coffee.stderr.on 'data', (data) ->
    console.error data.toString()
  coffee.stdout.on 'data', (data) ->
    console.log data.toString()
  coffee.on 'exit', (code) ->
    callback?() if code is 0

task 'build', 'Build lib/ from src/', ->
  build()

watch = (callback) ->
    coffee = spawn './node_modules/coffee-script/bin/coffee', ['-o', 'dist/', '-cw', 'src/microTK.coffee']
    coffee.stderr.on 'data', (data) ->
        console.error data.toString()
    coffee.stdout.on 'data', (data) ->
        console.log  data.toString()
    coffee.on 'exit', (code) ->
        callback?() if code is 0

 task 'watch', 'Watch src/ for changes', ->
  watch()