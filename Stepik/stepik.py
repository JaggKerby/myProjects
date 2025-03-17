# c = int(input())
# ars = []
# for i in range (0, c, 1):
#     ars.append(input().lower())
# sum = 0
# for el in ars:
#     if el.count('11') >= 3:
#         sum += 1
# print(sum)

# s = input()
# print((s[:s.find('h')]+s[s.rfind('h')+1:]).replace('h', ''))

# a = 2010
# b = '10k'
# c = 'Bitcoin'
# s = 'In {0}, someone paid {1} {2} for two pizzas.'.format(a, b, c)
# print()

# s = input()
# b = ''
# for i in range(0, len(s)):
#     t = ord(s[i])
#     b = b + ' ' + f'{t}'
# print(s)

# a, s = int(input()), input()
# b = ''
# for i in range(0, len(s)):
#     if (ord(s[i])-a) <= 96:
#         t = chr(ord(s[i])+a)
#     else:
#         t = chr(ord(s[i])-a)
#     b = b + f'{t}'
# print(b)

# s = str(input())
# if '1' in s:
#     s = s.replace('1', 'one')
# print(s)



# s = input()
# f_count = s.count('f')
# if f_count == 1:
#     print('-1')
# elif f_count == 0:
#     print('-2')
# else:
#     print(s.find('f', s.find('f')+1, len(s)))

# s = input()
# f_count = s.count('f')
# b = s.rfind('f')
# a = s.find('f')
# c = s[:a] + s[b:a:-1] + s[b:]
# print(c)

