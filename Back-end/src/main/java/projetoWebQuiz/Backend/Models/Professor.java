package projetoWebQuiz.Backend.Models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "professores")
public class Professor implements UserDetails {
    @Id
    private String id_professor;

    private String usuario_professor;
    private String chave_professor;
    private Set<String> roles = new HashSet<>();

    public Professor(String usuario_professor, String chave_professor) {
        this.usuario_professor = usuario_professor;
        this.chave_professor = chave_professor;
    }

    public String getId_professor() {
        return id_professor;
    }

    public void setId_professor(String id_professor) {
        this.id_professor = id_professor;
    }

    public String getUsuario_professor() {
        return usuario_professor;
    }

    public void setUsuario_professor(String usuario_professor) {
        this.usuario_professor = usuario_professor;
    }

    public String getChave_professor() {
        return chave_professor;
    }

    public void setChave_professor(String chave_professor) {
        this.chave_professor = chave_professor;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
