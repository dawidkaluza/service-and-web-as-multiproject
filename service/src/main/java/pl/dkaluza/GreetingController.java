package pl.dkaluza;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class GreetingController {
    @RequestMapping("/greeting")
    String greeting() {
        return "Hello World!";
    }
}
