package com.bohan.utils;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Response {

    private boolean result;

    private String message;
}
