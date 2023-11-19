package com.luisn.passatempo.mapper;

import com.luisn.passatempo.domain.Classe;
import com.luisn.passatempo.dto.ClasseDTO;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ClasseMapper {

    ClasseDTO toDTO(Classe classe);

    List<ClasseDTO> toDTO(List<Classe> entidades);

    Classe toEntity(ClasseDTO dto);

    List<Classe> toEntity(List<ClasseDTO> dtos);
}
