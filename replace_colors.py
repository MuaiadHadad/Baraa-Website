#!/usr/bin/env python3
import os

file_path = 'assets/css/style.css'

print(f'Lendo arquivo: {file_path}')
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

print(f'Tamanho original: {len(content)} caracteres')

# Contar ocorrências antes
count_ff1313 = content.count('#ff1313')
count_FF1313 = content.count('#FF1313')
count_ff3500 = content.count('#ff3500')
count_FF3500 = content.count('#FF3500')
count_0000ff = content.count('#0000ff')
count_0000FF = content.count('#0000FF')

print(f'\nCores encontradas:')
print(f'  #ff1313: {count_ff1313}')
print(f'  #FF1313: {count_FF1313}')
print(f'  #ff3500: {count_ff3500}')
print(f'  #FF3500: {count_FF3500}')
print(f'  #0000ff: {count_0000ff}')
print(f'  #0000FF: {count_0000FF}')

# Substituir cores vermelhas e azuis por branco
content = content.replace('#ff1313', '#ffffff')
content = content.replace('#FF1313', '#FFFFFF')
content = content.replace('#ff3500', '#ffffff')
content = content.replace('#FF3500', '#FFFFFF')
content = content.replace('#0000ff', '#ffffff')
content = content.replace('#0000FF', '#FFFFFF')

print(f'\nEscrevendo arquivo modificado...')
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Tamanho final: {len(content)} caracteres')
print('\n✅ Substituições concluídas!')
print('Todas as cores vermelhas e azuis foram mudadas para branco.')

