package backend.security;

import backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountAuthenticationService implements UserDetailsService  {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<backend.entity.User> account = userRepository
                .findByUsernameIgnoreCase(username);

        if (account.isPresent()) {
            return User
                    .withUsername(account.get().getUsername())
                    .password(account.get().getPassword())
                    .roles(getUserRoles(account.get()))
                    .build();
        } else {
            throw new UsernameNotFoundException("Could not find user "
                    + username);
        }
    }
    private String[] getUserRoles(backend.entity.User user) {
        return user.getRoles()
                .stream()
                .map(item -> item.getName())
                .toArray(String[]::new);
    }
}
