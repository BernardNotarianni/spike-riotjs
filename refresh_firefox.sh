#!/usr/bin/env bash
telnet localhost 4242 <<EOF
BrowserReload()
repl.quit() 
EOF
