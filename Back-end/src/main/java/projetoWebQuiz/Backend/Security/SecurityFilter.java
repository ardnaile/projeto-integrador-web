package projetoWebQuiz.Backend.Security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import projetoWebQuiz.Backend.Models.Professor;
import projetoWebQuiz.Backend.Repositories.ProfessorRepository;

import java.io.IOException;
import java.util.Collections;

@Component
public class SecurityFilter extends OncePerRequestFilter { // classe com filtro que roda uma vez a cada requisicao
    @Autowired
    TokenService tokenService;
    @Autowired
    ProfessorRepository professorRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = this.recoverToken(request);
        var login = tokenService.validateToken(token);

        if(login != null){
            Professor professor = professorRepository.findById(login).orElseThrow(() -> new RuntimeException("User Not Found"));
            var authorities = Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
            var authentication = new UsernamePasswordAuthenticationToken(professor, null, authorities);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }

    // recebe um request do usuario
    private String recoverToken(HttpServletRequest request){
        var authHeader = request.getHeader("Authorization"); // se mandar o token em outro lugar que nao seja o header, tem que mudar essa funcao
        if(authHeader == null) return null;
        return authHeader.replace("Bearer ", "");
    }
}
