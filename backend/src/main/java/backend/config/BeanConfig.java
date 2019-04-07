package backend.config;

import backend.repository.UserRepository;
import backend.security.TokenAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class BeanConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return  new BCryptPasswordEncoder();
    }

    @Autowired
    private Environment environment;

    @Autowired
    private UserRepository userRepository;

    @Bean
    public TokenAuthentication tokenAuthentication() {
        return new TokenAuthentication(environment, userRepository);
    }
}
