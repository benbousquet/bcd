package main

import (
	"fmt"
	"log"
	"net/http"

	socketio "github.com/googollee/go-socket.io"
)

func main() {
	fmt.Println("test")
	server, err := socketio.NewServer(nil)
	if err != nil {
		log.Fatal(err)
	}

	server.OnConnect("/", func(s socketio.Conn) error {
		log.Println("connected:", s.ID())
		s.Emit(s.ID())
		return nil
	})

	server.OnError("/", func(s socketio.Conn, e error) {
		fmt.Println("meet error:", e)
	})

	server.OnDisconnect("/", func(s socketio.Conn, reason string) {
		fmt.Println("closed", reason)
	})

	go server.Serve()
	defer server.Close()

	http.Handle("/socketio/", server)
	log.Println("Serving at localhost:8001...")
	log.Fatal(http.ListenAndServe(":8001", nil))

}
