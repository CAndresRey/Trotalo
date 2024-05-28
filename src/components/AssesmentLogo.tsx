import { SVGProps } from "react";

const AssesmentLogo = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="29.5" cy="29.5" r="29.5" fill="#F4F4F5" />
      <path fill="url(#a)" d="M14 14h32v32H14z" />
      <defs>
        <pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#b" transform="scale(.00195)" />
        </pattern>
        <image
          id="b"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAMaWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdUU8kanluSkJDQAhGQEnoTRHqREkKLICBVsBGSQEKJISGo2JFFBdcuoljRVRBFV1dAFhWxl0Ww98WCirIu6qIoKm9CArruK+f958ydL9/887c7kzsDgGYfVyLJRrUAyBHnSWPDgpgTk1OYpGcAAZqAAawAjcuTSVgxMZEAylD/d3l3A2pDueqosPXP8f8qOnyBjAcAMhniNL6MlwNxMwD4Jp5EmgcAUcFbzMiTKPACiHWlMECI1ypwhhJXKXCaEjcN6sTHsiFuA0CNyuVKMwDQuAd5Zj4vA9rR+ASxs5gvEgOgOQpif56Qy4dYEfuonJzpClwOsS3Ul0AM4wFead/YzPib/bRh+1xuxjBW5jUoasEimSSbO+v/LM3/lpxs+ZAPa9ioQml4rCJ/WMNbWdMjFJgKcbc4LSpaUWuI+0R8Zd0BQClCeXiCUh814snYsH7wnQPUmc8NjoDYCOJQcXZUpIpPSxeFciCGqwWdKcrjxEOsD/ESgSwkTqWzTTo9VuULrUuXslkq/hxXOuhX4euBPCuBpbL/RijgqOxjGgXC+CSIKRBb5osSoyDWgNhJlhUXodIZWyBkRw3pSOWxivgtIY4ViMOClPax/HRpaKxKvyRHNpQvtk0o4kSp8ME8YXy4sj7YKR53MH6YC9YmELMShuwIZBMjh3LhC4JDlLljzwXihDiVnT5JXlCsci5OkWTHqPRxc0F2mII3h9hNlh+nmosn5sHFqbSPp0vyYuKVceIFmdxxMcp48JUgErBBMGACOWxpYDrIBKLW7vpu+Es5Egq4QAoygAA4qpihGUmDI2L4jAMF4A+IBEA2PC9ocFQA8iH/eZhVPh1B+uBo/uCMLPAU4hwQAbLhb/ngLPGwt0TwBDKif3jnwsaD8WbDphj/9/wQ+5VhQSZSxciHPDI1hzSJIcRgYjgxlGiHG+L+uC8eCZ+BsLngXrj3UB5f9QlPCe2ER4TrhA7C7WmiQul3UY4HHdB+qKoWad/WAreGNt3xINwPWoeWcQZuCBxxN+iHhQdAz+6QZaviVlSF+Z3tv2XwzdtQ6ZGdySh5BDmQbPv9TA17DfdhK4paf1sfZaxpw/VmD49875/9TfX5sI/4XhNbgh3CzmInsPNYE1YPmNhxrAG7hB1V4OHV9WRwdQ15ix2MJwvaEf3DH1flU1FJmXONc5fzJ+VYnmBmnmLjsadLZklFGcI8Jgt+HQRMjpjnNIrp4uziCoDiW6P8+3rLGPyGIIwLX7ncZgC8SyCZ8ZXjWgBw5CkA9HdfOYs3cNusBOBoG08uzVdyuOJBgP8SmnCnGQATYAFsYT4uwAP4gkAQAsaBaBAPksFUWGUhXOdSMAPMAQtBMSgFK8E6sBFsBTtAFdgHDoJ60AROgDPgImgD18FduHo6wUvQA96BfgRBSAgNoSMGiClihTggLogX4o+EIJFILJKMpCIZiBiRI3OQRUgpshrZiGxHqpGfkSPICeQ80o7cRh4iXcgb5COKoVRUFzVGrdHRqBfKQiPQeHQKmoHmogVoEbocLUcr0b1oHXoCvYheRzvQl2gvBjB1jIGZYY6YF8bGorEULB2TYvOwEqwMq8RqsUb4nq9iHVg39gEn4nSciTvCFRyOJ+A8PBefhy/DN+JVeB1+Cr+KP8R78C8EGsGI4EDwIXAIEwkZhBmEYkIZYRfhMOE03EudhHdEIpFBtCF6wr2YTMwkziYuI24m7ic2E9uJj4m9JBLJgORA8iNFk7ikPFIxaQNpL+k46Qqpk9Snpq5mquaiFqqWoiZWK1QrU9ujdkztitoztX6yFtmK7EOOJvPJs8gryDvJjeTL5E5yP0WbYkPxo8RTMikLKeWUWsppyj3KW3V1dXN1b/UJ6iL1Berl6gfUz6k/VP9A1aHaU9nUyVQ5dTl1N7WZepv6lkajWdMCaSm0PNpyWjXtJO0BrU+DruGkwdHga8zXqNCo07ii8UqTrGmlydKcqlmgWaZ5SPOyZrcWWctai63F1ZqnVaF1ROumVq82XXuMdrR2jvYy7T3a57Wf65B0rHVCdPg6RTo7dE7qPKZjdAs6m86jL6LvpJ+md+oSdW10ObqZuqW6+3RbdXv0dPTc9BL1ZupV6B3V62BgDGsGh5HNWME4yLjB+DjCeARrhGDE0hG1I66MeK8/Uj9QX6Bfor9f/7r+RwOmQYhBlsEqg3qD+4a4ob3hBMMZhlsMTxt2j9Qd6TuSN7Jk5MGRd4xQI3ujWKPZRjuMLhn1GpsYhxlLjDcYnzTuNmGYBJpkmqw1OWbSZUo39TcVma41PW76gqnHZDGzmeXMU8weMyOzcDO52XazVrN+cxvzBPNC8/3m9y0oFl4W6RZrLVoseixNLcdbzrGssbxjRbbyshJarbc6a/Xe2sY6yXqxdb31cxt9G45NgU2NzT1bmm2Aba5tpe01O6Kdl12W3Wa7NnvU3t1eaF9hf9kBdfBwEDlsdmgfRRjlPUo8qnLUTUeqI8sx37HG8aETwynSqdCp3unVaMvRKaNXjT47+ouzu3O2807nu2N0xowbUzimccwbF3sXnkuFyzVXmmuo63zXBtfXbg5uArctbrfc6e7j3Re7t7h/9vD0kHrUenR5Wnqmem7yvOml6xXjtczrnDfBO8h7vneT9wcfD588n4M+f/o6+mb57vF9PtZmrGDszrGP/cz9uH7b/Tr8mf6p/tv8OwLMArgBlQGPAi0C+YG7Ap+x7FiZrL2sV0HOQdKgw0Hv2T7suezmYCw4LLgkuDVEJyQhZGPIg1Dz0IzQmtCeMPew2WHN4YTwiPBV4Tc5xhwep5rTM85z3NxxpyKoEXERGyMeRdpHSiMbx6Pjx41fM/5elFWUOKo+GkRzotdE34+xicmN+XUCcULMhIoJT2PHxM6JPRtHj5sWtyfuXXxQ/Ir4uwm2CfKElkTNxMmJ1Ynvk4KTVid1TBw9ce7Ei8mGyaLkhhRSSmLKrpTeSSGT1k3qnOw+uXjyjSk2U2ZOOT/VcGr21KPTNKdxpx1KJaQmpe5J/cSN5lZye9M4aZvSenhs3nreS34gfy2/S+AnWC14lu6Xvjr9eYZfxpqMLmGAsEzYLWKLNopeZ4Znbs18nxWdtTtrIDspe3+OWk5qzhGxjjhLfGq6yfSZ09slDpJiSUeuT+663B5phHSXDJFNkTXk6cJD/SW5rfwH+cN8//yK/L4ZiTMOzdSeKZ55aZb9rKWznhWEFvw0G5/Nm90yx2zOwjkP57Lmbp+HzEub1zLfYn7R/M4FYQuqFlIWZi38rdC5cHXhX4uSFjUWGRctKHr8Q9gPNcUaxdLim4t9F29dgi8RLWld6rp0w9IvJfySC6XOpWWln5bxll34ccyP5T8OLE9f3rrCY8WWlcSV4pU3VgWsqlqtvbpg9eM149fUrWWuLVn717pp686XuZVtXU9ZL1/fUR5Z3rDBcsPKDZ82Cjderwiq2L/JaNPSTe838zdf2RK4pXar8dbSrR+3ibbd2h62va7SurJsB3FH/o6nOxN3nv3J66fqXYa7Snd93i3e3VEVW3Wq2rO6eo/RnhU1aI28pmvv5L1t+4L3NdQ61m7fz9hfegAckB948XPqzzcORhxsOeR1qPYXq182HaYfLqlD6mbV9dQL6zsakhvaj4w70tLo23j4V6dfdzeZNVUc1Tu64hjlWNGxgeMFx3ubJc3dJzJOPG6Z1nL35MST105NONV6OuL0uTOhZ06eZZ09fs7vXNN5n/NHLnhdqL/ocbHukvulw7+5/3a41aO17rLn5YY277bG9rHtx64EXDlxNfjqmWucaxevR11vv5Fw49bNyTc7bvFvPb+dffv1nfw7/XcX3CPcK7mvdb/sgdGDyt/tft/f4dFx9GHww0uP4h7dfcx7/PKJ7MmnzqKntKdlz0yfVT93ed7UFdrV9mLSi86Xkpf93cV/aP+x6ZXtq1/+DPzzUs/Ens7X0tcDb5a9NXi7+y+3v1p6Y3ofvMt51/++pM+gr+qD14ezH5M+Puuf8Yn0qfyz3efGLxFf7g3kDAxIuFLu4FEAgw1NTwfgzW4AaMnw7ADvbZRJyrvgoCDK++sgAv8JK++Lg+IBwO5AABIWABAJzyhbYLOCmAp7xRE+PhCgrq7DTSWydFcXpS0qvAkR+gYG3hoDQGoE4LN0YKB/88DA550w2NsANOcq76AKIcI7wzYnBWrrfAW+F+X99Jscv++BIgI38H3/L4djj1J8uMspAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAAIAoAMABAAAAAEAAAIAAAAAACgwl78AAEAASURBVHgB7d0HuDRFmfbxF0kvShIFFAQRRUREEVGMLCZEUTF9a1bMa1gj5rRrwCyogFkRFd3vU8GEGUVdExIWA0qQIBkFFsmCfvct7+C8w5xzqqequqtq/nVdzzVzZrqrq341c+qZnu6eVZZREEAAAQQQKFtgfTVvK8WmilsscHuNHj9Xcd7Y7fj9X+vx4xUUBBBAAAEEEChYYGu1bS/FEYqrFX9PEKeojv0VuyvWUlAQQAABBBBAYGCB1bT9f1G8R3GCIsWEv1gdl2sb31D8u2JLBQUBBBBAAAEEehTYUNvaV3GBYrEJO/dzP9b276OgIIAAAggggEBGgbVV9xsUFytyT+5d6v+62nMnBQUBBBBAAAEEEgqsrrqerzhH0WVi7nPZv6ltByturaAggAACCCCAQITAKlr3cYqTFH1O5jHbukptPUBxcwUFAQQQQAABBDoKbKzlf6iImYyHXPcStf2xHfvM4ggggAACCMy1wA7q/emKISfwVNveW/24wVyPJp1HAAEEEEAgQMCfmi9TpJqAS6jna+rPugF9ZxEEEEAAAQTmTsCfkv1puYQJO0cbjlffbjt3o0qHEUAAAQQQWERgHT33FUWOibekOi9UH3dbxIGnEEAAAQQQmBsBX9TnN4qSJuqcbfHvD7xgbkaXjiKAAAIIIDBFYA099iNFzgm3xLp9zYA9pnjwEAIIIIAAAnMh8FH1ssQJuo82+WqG287FKNNJBBBAAAEExgReqPt9TLQlb+NkGWwwZsJdBBBAAAEEmhZ4gHqX6ud6S57gQ9r2PVn4Vw2rKL40IwUBBBBAAIFZBG6jlX6huPEsK8+4jq/K91vFmYqzVoTv/1WxqWKTFeH7WytuquizfEAb8x4RCgIIIIAAAk0K+GI4nohDPhnHLnOutuNjDHZXrKkILb4ewb0U71KcqIhtR+j6z9C2KAgggAACCDQpcKB6FTohzrqcrydwH0Wqy+/6QL39FP6Rn1nbFLLeFap/cwUFAQQQQACBpgTurN74HPiQyXCWZX6iuj3x5yr+md/PK3wK3yztC1nnE7kaT70IIIAAAggMJeCD3UImwa7LnKJ6H9ljp3bUtn6cqS8+MHKbHvvCphBAAAEEEMgq8FDV3nViD1n+cNV7k6wtn165j9r/oCKkjV2X+dL0TfIoAggggAACdQmsqubmOPBvf9U79Olzz1Mb/qroOskvtfzdVCcFAQQQQACBqgWeo9YvNeF1ed67yV1nKeV+aoh/5KdLH5Za1l+XUBBAAAEEEKha4Fdq/VITXpfnSzxf3klA6j0BD6x61Gk8AggggMBcC9xVve8yuS+17EcK1vTXAUu1v8vzPyy4rzQNAQQQQACBRQUO0LNdJr3Flj1Cda2+6NaGfzLlgYE+3XDj4btECxBAAAEEEOgmsFyLp/pu3Jft7fvyvN16e+3SPigx5SmCz5ylEayDAAIIIIDAkAKP08YX+0Tf5bmaLpN7F/U71cWCfFVDCgIIIIAAAlUJHKbWdpnkF1r2eNXjUwlrKp9TYxfqT5fHL1M9N6yp47QVAQQQQGC+BXwd/osVXSa7hZbt8yp/qUZtS1V0ZaL+PyJVo6gHAQQQQACB3ALbaQMLTehdHv9p7oZmrP99iQz4fYCMg0TVCCCAAAJpBZ6t6rpM9Ast++S0zeq1tq0SGZynerxHpYgy9KUXi0CgEXMlsIp6u4HCRyH7uuOO0f3RrZf5o+L0sfDf/olPCgLzJnCPBB32Ff++lqCeoao4URv+reL2kQ3YcEUdv46sJ8nqJABJGKmkcAGff+srcT1IsatiI8Us5Xyt5KTA/wy+rPA/tEsUFARaFkiRAPi8f59GWHM5RI2PTQDc/80URSQAbgwFgdYEfIGRXRRvUxytSHUaz+SuTR/V61/7erxibQUFgdYE1lOHUrx/XtAAzI7qw+T/gFn+ruk0yAaGjS7Mi8Cm6uh+ir8oZnljxqxzubbpTwhPUKyjoCDQgsDW6kTM+2K0rj/1tlDOUCdGfZr19g0tQNAHBEoRGE38/o5+1jdlyvX8tcDrFGuVAkQ7EJhR4J5aL/a9cemM2y5xNf+yX6zHh0rsGG1CoDaB0ib+yX8MpwnUV1CjIFCrwEPV8MnXdde/T6q181Pa/ZkEHl+dUu8gDxVzOsIgvWejtQrcTA33rv6TFc9XrKkosWyuRn1O8d8K/5IaBYHaBHzGTGw5O7aCgtZP0ZdNSukPCUApI0E7QgXurwX/R1HyxD/ZF+9G/bniIIX3WlAQqEWABGDlkSIBWNmDvxDoRcDn5vt79W8rZj2Nr5eGLrARt//Jit8rnr7AMjyMQGkCKRKAc0rrVER7UvQlhWlEF/65KtcB+KcF98oV8BvG3709uNwmBrfsRlry44otFBwNLARK0QI+sDa2tDTPpOjLBbGgqdbnK4BUktSTS+BuqvgYRQuT/7jR6/XHpxS+ZgEFgVIFUkxWNy+1czO0K0VffDngIgoJQBHDQCMWEHieHv+RwgfTtVieok59Q7Fui52jT00IkACsPIwkACt78BcCWQR8kN/+ijWy1F5OpT6o8ceKW5TTJFqCwHUCJADXUfzjTooE4NyVqxzuL/YADGfPlhcWeLie8s9vzkvxz63+TOFbCgIlCaRIAHzabislRQLAVwCtvBroR3IBny/vc+dXTV5z2RX69MDDFDctu5m0bs4E/pygv96Lt22CeoauwgcA3iFBI0gAEiBSRXsCW6pLX1PcsL2uBfXIXwMcrGDPXBAXC/UgcIa2keJSvnv00Nbcm9hZG7hxgo3wFUACRKpoS8Cn+vkTcI3n+KccCf9sMacHphSlrhiBa7TyL2IqWLHuIxLUMXQVqfqQ4mJCSSx8cRIKAkMLLFcDvqO4d88NcSZ+gsK75M5fEf4lQScjGyq8O34LhXf79fmVxN+0PZ/26IseURAYWuCtasBrIhvh3w/YTHFmZD1Drn6aNr55ZAP+qvX9f+XiyHpYHYFmBN6rnnT9gZFZlveb74cK/zO7syI0AfbP+/qT+X8ojlXMsu2u6zgh4cwAIVAGF0jxg0B+/T9v8J7M3oAdtGrX9/C05Q+fvQmsiUB7AlurS1cppr1ZUj3mXW4vVqynSFHuoUoOUlyuSNXGafX8RPWvrqAgMKSAP7FOe312fez3qscH0tVYfGBy1/5OW36vGjtPmxHIJfB1VTztjZLiMV+3+6WKtTI13scrfFTh70lTtHdaHW/O1HaqRaCLwAlaeNrrs+tj/9Zlo4Usu6Pa4a/luvZ12vLbFNInmoHA4AK7qQXT3iSxj12tet+g6OtsAv+D+GmmvviYBH8CoyAwpMC7tfHY96XX9964Gw3ZkRm2/X2tk6Lvp8ywbVZBoEkB7wo8XpHijTVex59U5wMGEPPxBD5Yarwtqe6/fYD+sEkExgV8IGyq1/Prxisu/P7uCfu9f+F9pXkI9CbwIm0p1T+UUT1Hqc5b9taD6Rt6hh72wYajNqW4ZS/AdGse7VfgyESva7+ea9gV7nP+T0rUZ/8feIiCgsDcC9xEAr7EaIrJcVTHF1Tf8kJkfcbA/ybuH3sBChncOW6Gj+Ifvd9ibz2x+nTbUotP+/2OIrafo/UvUV25jkUq1ZB2ITBV4H16dPTGSHH7I9W35tQtDfegr+t/oSJF/1wHewGGG0u2fK2APxFfoUj1mv6e6ir1rID3J+ynvfZWUBCYewFnwSk/HfvoZO9RKLE8TI1KdfSw/4mwF6DEUZ6vNn1e3U2VALieAwrke3biPvqDwPoF9pMmIdC7wOO0xVT/QHzA31a996DbBp35p+qv9wL4UxgFgaEEvGfLZ9mkek27ng8qSrnexQsz9O/VqpOCAAIS8PX+U/3z2LUCUX+X6F2dqfr8+Ar6TBPbFvhIwtfz6H3xA9U55OmuTkBy9MunPfZ1OrI2RUGgXAH/LniqTw9fKbeb12uZLxiU6niAA69XOw8g0K+A38feGzWavFPdnqI6vYeh7+LE4whFqn6M1/P8vjvD9hAoVcBX5Rt/c8x636fZ3a7UTi7Qrjcm6vtZC9TPwwj0KfA6bWzW9+9i6/mnh/1e6eNiQf7Z7acpzlQs1qZZn/uD6i3lqw01hYLAsAKpdv/vN2w3Ztr6elor1amPd5ypBayEQDoBH8z7R8Wsk+NS63nX+XMUuc4SeLDqPi5j+92/JysoCCAgAWfbFymWeuMv9bzPIBjyu0Jtfubyeq25VP9Cnt9r5hawIgLpBP6fqgp5vcYs46uFPkvhrx1iy9qq4DGKlMfkLNS3/9Z2/D+PggACEvCn1oXeLF0e/1jFmuuq7Sn2AvgCJRQEhhTYRxvv8r6NXdan0/5U4SPqb68ILZtpwecqvqG4QhHbjpD1vWckRcKiavKW0N9Dz9sKap8HAV9FLMW1sHdXPf4qodbyKTX8KZGNv1Lrb6C4LLIeVkdgFgFP/v557SGL3wM+HmYU/h7fxwZtqthkRfh+H8cSaDPXlct17z6Ko657hDsIILDsszIIyZ4XW8a7/9eo3PIJCRxs9MDKHWh+nQJ9f/Jf7P9Bic9xmm6dr2tanVngaNUf+4Y9OHMb+6h+Q20kxdUBn95HY9kGAmMC79X92Pdwy+u/bcyKuwggMCZwju7HvvkfO1ZfzXe9ezDW4hU1A9D26gSY/Bd/z35VI1rdQX/VNbi6tw0NtoBP5fEn39jyu9gKClnfRyHHlhSesW1g/fkQ8OT/kvno6ky99JkKT1R4z15VhQSgquGqtrEbq+UpXmunVyuwcsPPWPnPmf6q9VTImTrLSoMJMPkvTu+9eT4e5+LFFyvz2RT/lMvsGa0qScBH5caWS1XBhbGVFLK+f8QotrAHIFaQ9ZcSYPJfXOhzetpH/PsMhCoLCUCVw1Zdo1P8FKbPrW2lpEgA2APQyquhzH4w+S88Lt7V7+sR+Iwen/ZXbcl1mcVqQWh4FoFrEtR6doI6Sqnizwkawh6ABIhUMVWAyX8qyz8e9K5+T/xfX3iRep4hAahnrGpuqS/QEVt8Gc9Win9JLbbcJLYC1kdgigCT/xSUFQ+dqNs9FD7or4nCVwBNDGPxnfBPAMeWlia8FJcJrfKgo9gXAetnFXiPas95tL9/O+DUrD3IU7l3+R+o2EnRzOSvvlAQ6EVgR20l9rx3XwWwleJThmI9ftwKBv0oQsCTf+xrcrH1fQVBF1/J8wWKFNcFWWx7qZ47RG3t8tsDWpyCAALjAtvqjxRvyNXHK634/qsSeHy24v7T9LIE+pr8x3vta/S/RuEze1L8b0hdxw/UrrsrKAggECngN3uKy9/eMrIdpay+vxoS+w9r71I6QzuqFhhi8h8Hu7H+8CV0L1XEvidSrH+M2rGbgoIAAgkFfBpf7Bt0z4TtGbKq7yaweM6QHWDbTQgMPfmPI/q4GCe1v1LE/p/ouv752uaBiocp+IVcIVAQSC3gy992fWNOLv+51I0aoL71tM2rEljwKWWAwWtokyVN/pOsm+uB5yq+pvBPXk/+H0jx9+9U7zsV91ZwMLwQKAjkFPigKo994/oCOrW/WVMcAGhHDkzK+Wptu+6SJ/9J+bX0wO6KAxQ+At8HA3f9P/JnrXOcwufuv1yxtYIiAa4DwMugL4HfJ9iQTwW8i+LIBHUNVcWjEm34tET1UM18CXjyf2nGLu+rulOeSni56vPE7RiVNXVnI8XGE7cb6O8LFGcozhy7dR0UBBAYUMATd9fMfdry/gdWa7mhGn6pYlq/ujzm3ZcUBLoKvFsrdHmddV12n64NYnkEEJgPAR9c44Ntuv5TmVzeE6gz/xrLs9Toyf7M8vdbauw8bR5UgMl/UH42jgACB4tglglvch1frrS2srYafLZisi+z/L19bZ2nvYMKMPkPys/GEUDAAnsqZpnwJtfxkcE+baim8iY1drIfs/x9Uk2dpq2DCzD5Dz4ENAABBCywiWKWSW/aOvtVRLqp2priu387vL2iftPUYQWY/If1Z+sIIDAhkOJ6AJ4IfWXBh0/UXeqfn1bDpiUxszzm31WgILCUAJP/UkI8jwACvQv4NLhZJr5p6/g64lv23oNuG3xBwv6e0m3TLD2nAkz+czrwdBuB0gVWVQNTXBZ4lBD42t3LC+30w9Qu/xTyqK2xt/7HTkFgMQEm/8V0eA4BBAYXeJ1aEDsZjq9/kOor7QqBO6hNlyTu5wdVnxMoCgLTBN6lB8ffF6nvc57/NHUeQwCBTgI+j/9KRcp/UF9Wfb7QTgllKzXiLEXK/o3q8jEUvgoaBYFxASb/cQ3uI4BA0QI5/mEdqR4PfXqgD0y8SDGasHPc+jKn91JQELBAjvfS+OuWT/68zhBAIKnAuqrtXMX4P5oU909Vndsq+i7+CsI/Z+qzE1L0Y6k6/qrtpLzmuqqjVCjA5F/hoNFkBBBYtizVpXEnJ0ufc/8mxdo9Id9C2/mOYrIdffz9BW3XyRRl/gSY/OdvzOkxAs0I+FPzsYpcE6UvvftMRa4D5/y75f6Z0isUufoQUq9/aXE7BWV+BJj852es6SkCzQr4p0lDJrmYZY7TNp6kWC+R4paq5yOKqxQx7Uq5rvd6PEVBaV+Ayb/9MaaHCDQvsJt62OenZ0/Y31D4q4cuR9L798cfoPA/3l8pUk7cqev6sNrn9lLaFGDyb3NcB+mVf6KVgsAQAp78D1UMNVn5YL3TFb4o0ejW9/11gZODDVeET1m8s6KUUwzVlCXL0VriMYpTllySBWoSeKca+/KMDd5XdXNgaUZgqkYAgWXL+v7kn/pTdg31XaAX2kN5sTUj4Mk/5+uOU/2aeanQEQTKFWDyz/uPfHyS8F4On5qY6yDIcl9lbbWMyb+t8aQ3CMylAJN/f5P/eCJwuF5t/iqDUp8Ak399Y0aLEUBgQoDJf5jJf5QI+OqB954YE/4sW4DJv+zxoXUIIBAgwOQ/7OQ/SgJ89cCXBYwXiwwvwOQ//BjQAgQQiBRg8l988vc1Cp6tyP37AaMkwLdfVHD1QCEUWpj8Cx0YmoUAAuECTP6LT/6eiEeXK7617h+jGJ+oc94/Qdu6o4JSlgCTf1njQWsQQGAGASb/hSdzH53/BsXkdTiW67GPK3JO/ON1X6ZtPVVBKUPgHWrG+Pikvs+pfmWMM61AoGkBJv+F/5FfrJHfY4nRf7qev1yRegJYqL6PaltOPijDCTD5D2fPlhFAIJFA7snf35mfolhoMiv58S+r3bcKdN5ey53UYz999UD/xgGlfwEm//7N2SICCCQWyD35e5LaQOHLB79K4U/TJU/4o7adqHY+RNG1rKcVDlGM6sl9e6G29bCujWT5KAEm/yg+VkYAgRIE+pr8x/vqi9v4V/muUeSeHGep37/Q91pF7O8d+PrvPoVvljZ0XcfHJ7xNwdUDhZC5MPlnBqZ6BBDILzDE5D/eKx/N7k/KfU2SS02q56otvgTvpopUZWdVdLZiqW2nev772hZXD0w1etevh8n/+iY8ggAClQkMPfmPc91cf7xa0ed35+MT7o+17Sco1lDkKDdTpT9QjG8z5/2ztK37KChpBZj803pSGwIIDCBQ0uQ/3n2fXndfxWcV/6vINUl6d7kPStxH0dc59d417wnE287Vr/F6vVdlLwUljQCTfxpHakEAgQEFSp38J0luoAe2Uzxb8UnF7xSzTp5e71eKDygerbipYqiyhzbsg/bGJ+uc97+kba03VGcb2e7bM4+XE1EKAsECkxciCV6RBedawJP/oYrYg9sWQjxGTzxAccFCC0Q+7jMJtlZsuCI8kY/uu0/nK85VnDdx68d8YF8pxaft+WqCPmWwj+KvVh6j+J8+Nha5Df9v8zEYyxWrK1abuNWfy05TnOE7PRRP/q/MuJ19VfdLMtZP1QgggMAyT/5XKHJ92jxadXuCpoQJeIL7mCLXeEzW66sHPi2sab0ttZa2dFfFsxT7K3wsxl8Uk22f9vclWu4oxcGKNyoeq/DXOSk/HHnyn7btVI/xyV/AFAQQyCvA5J/XN6Z2T8qenFNNKkvV46TDycdQZQtt+PUKH4NxtWKp9nZ9/o+q05+q76mISQaY/AVIQQCBugWY/MsfvzupiScquk52sy7vr2r6vHrgOtre0xU/UMx6HMcsfZ01GWDy10BREECgbgEm/3rGbz019RDFLBPdLOtcqG3tkZnHpyL6jI4+93AsZHGq2uG9LT64dLHC5L+YDs8hgEAVAkz+VQzT9Rq5lx7xKXwLTWQpH/encZ/elvrqgbdSnT7IMWVbU9Xlrx4erJhWmPynqfAYAghUJcDkX9VwXa+x/uTsi/mkmvSWqucH2pYvVhRbbqQK3qrIebDpUn0Jff57aucOYx1m8h/D4C4CCNQpwORf57hNttqX8/2+InRCi13OlyveebIRgX/7YLsnKc5UxLajz/W9B+Qzivdlbvc+qp+CAAIIZBVg8s/K23vl3jXvT6Z9HTjno/Jf0bGXm2h5n77X58Rd07aY/Du+oFgcAQS6CzD5dzerZY2Hq6E+aK+vic8Xi1ovAMe70H1Bnr7aVdt2mPwDXkQsggACcQJM/nF+Nazt0/Z8saW+JsGTtK3FrlT4KD3vqyv21Z7atsPkrxcHBQEE8gow+ef1Lan25WrMRxV9TYaXa1s+f3+y+Jcb+/paoq++ptwOk//kK4a/EUAguQCTf3LSKircU63s89z6j2t7vmzvGopPKVJOlq3VxeSvFwgFAQTyCjD55/UtvXZf977Pqwceq+19W9HahJ2yP0z+pb9raB8CDQgw+TcwiAm6sK7q+JIi5SRGXbN5MvkneEFTBQIILC7A5L+4zzw+2+fVA0kQrp8gMPnP47uOPiPQswCTf8/gFW2u76sHkghcmwgw+Vf0JqGpCNQqwORf68j11+6+rx6YOwm4SHS/VXxfcZTCVyu8RpF7u6H1M/lrMCgIIJBXgMk/r29LtfvqgW9T1Haann+6d3+Ff6jn1gqfdTCtrKYHb6HYSeGvPnwVwiGSAiZ/wVMQQCCvAJN/Xt9Wa3+YOnahIvTT7BDLnar2/adi/Ed59GfnspHWeIbiMEUf/fhw5xayAgIIINBRgMm/IxiLryTgn+X1rvM+JsUu2zhPbXqRwtcVSF3uqgoPV3RpT9dlv5y60dSHAAIIjAsw+Y9rcH9WgeVa8SOKrpNcjuUvVjveqFhHkbv4/eNrF+Toh+t8QO4OUD8CCMynAJP/fI57zl4/VZX3efXAyYnXv2Owec4OTqn7BnrMXzFMtiXF379SvT7egoIAAggkE2DyT0ZJRRMCvnrgCYoUE2CXOj6vbd5woi19/vmv2liO5Oe5fXaCbSGAQNsCTP5tj28JvfPVA7+o6DKBz7qsz0R4TQmdVht8oKHPNJi1L9PW87EMyxUUBBBAIEqAyT+Kj5U7CrxMy/9VMW1iS/XYnh3blHvxTbWB1EmAzz6gIIAAAjMLMPnPTMeKEQL31rpnKlJN+OP1vCeiXTlX9Z6AlF8HHJezsdSNAAJtCzD5tz2+pffOVw9Mfdrct1RnyQfI+ZiA8WQl9v79Sh9k2ocAAuUJMPmXNybz2KLt1OnYSXC0vn+i+MYVIKY8O+ArFfSXJiKAQEECTP4FDcacN+Ul6v9oAo+59UF/3sVeQ/EpgscoYvo7WtfHUtSQ9NQwLrQRgeYFmPybH+KqOniYWjuazGJuD66q18uW7Zqo3zZ7fGV9p7kIIDCAAJP/AOhsckEBX473EkXMxO91/Sn4NorayrfV4Ni+e/3P1tZx2osAAv0KMPn3683WlhbYRYukmAA/tPSmilxie7Uqxa8J/ln1lHzgY5H4NAqBeRFg8p+Xka6rn29Vc2MTgCtVxyZ1dXul1h6SwMCG91qpVv5AAIHBBZyV+/fD76zwr6PdSNF3YfLvW5zthQr8QgvGJgDfCd1Yocs9MYGBDV9caP9oVmMCqzXWn9jubKQK7qvYQrGpwhP+6NbnOU/umrtUj/kyno5zV9yerdsfKY5QXKVIVTz5H6pYM1WFE/X4SGb/MtkFE4/zJwJLCfjI9bsstVDA8z6IsObydTX+akXs/9U71IxA2xGoSWBbNfbVip8oUnyHN/oU9BfV5wn7WQonETGFT/4xeqybW+Ch2sDodR9zu3XuhvZQ/3cTWPy0h3ayCQTmUmB19fr+in0VJyti/mF1WfdYbcvfk95d0aUw+XfRYtkhBJ6ujXZ5L0xb1u/FFsoL1Ilp/evy2MUtQNAHBEoS8MT/PMU5ii5vxhzL+iuCnRVLFSb/pYR4vgQB/yBQ7PvkoyV0JEEbtk9gYcvNErSFKhCYe4FVJOCLa5ykiP0nlXr9b6pNC313yuQvHEoVAm9RK2PfG6+voqdLN9LHEcVaeH0fbExBAIEIgQdp3aMVKd6QuerwZU+/oNhGMSpM/iMJbmsQ2F+NjH1/+FiZFoovDfxXRaxHyB7CFrzoAwLJBe6qGg9XxL4J+1z/GrX3U4o9FVcocm3bCdEGCgoCqQQ+p4piX68+kLCVcoY6EuuxeysY9AOBPgX20sY8mca+AVtcn8m/z1fi/GzLX2XFvl92bIjrlwk8HteQB10pVCD2fNWSurVcjfmI4sklNaqgtnCef0GD0VhTUvyCXUtHvvsU4NgyxIXGYtvM+pUJ+PuqFoovH+oL7zD5Tx9NJv/pLjyaRmD9BNX4QlutlBR9ubwVDPpRrkALCcBO4vUut7uVyzxoy5j8B+Wfi41flKCXN0tQRylV3DxBQy5MUAdVILCoQO0JwFPUO3/yT/GGWxSq0ieZ/CsduMqa/YcE7W0lAVhLFin2iHBJ7gQvKqpYXKDmBODF6pqPml9z8S7O7bNM/nM79L13/JQEW2wliU/VD/YAJHhRUcXiArUmAD6//92Ld22un2Xyn+vh773zKRKA2/Xe6jwb3CpRtewBSARJNW0J3FbdcXYce9pRq+tzql9br/caeuPf1oh9P/nI+TVq6OwSbdw3gcWfl9gGTyMwlwLrqdfHK2L/2bS6PpP/XL4tBu/0lonek7sO3pP4BpycwOJ78c2gBgSWFqjpOgD+uuJgxZC7Cq/S9s9V2M3X/F5VUUrx5P9ABbsOSxmR+WnH6erqNYrY94OvBvjtitlur7Y7GYotx8ZWkGh9/8/dQtHCnplEJEmq+ZtqOVXh+YQSKPAOLdfXJ/erta0fKl6h8O7NbRWTl8/1m8Pn+26veIhib8Vxir7aOL4dPvkLnjKowCna+vhrcpb7Kc4mGBLhlQkM7Dbk9Ux8EOPbFd9X+OJMs4wj6yztdqVsj1T4dzT44SchLFaeqCdzv6j8Ax7/pfC2Jid7PRRcNteSz1V8V5G7za7fB/yluBKbqqEgMLPAQVozxeu91mvge+9Hqq8n7zDzKMSt6MTDexBTjCN1hDt67nmTgj0tQpgs6+uBnC9K747xj5mkOnp3vP330h/ek5DzzeAscpXxjXIfgQEEvPs+xevcu79rfD0/I1H//UNCQ/T/E4nan+I1MK91/FJjsJaCMibwVt3P9YL4quq+09i2ct19sCr2J/Vc/Rhyl2EuM+qtS8CfXi5SpHiN1/ZDOP4dkj8m6vsHVE/fxd4pxo064h3f0/fgl7w9H2h3SYYXp+t8dM8dd1b/BoX3OKR+o/ifzw0VFASGFPiUNp7itX2C6qnpAOWXJeq37e6n6LP4Cow+7TDFuFFHvKMPpr1nny+Akre1b4YX5qmqs49P/Qu5PkJP/EWR+s3i5IKCwJAC/v4+1ev6JUN2pMO2fSDwnxL12/X0nfi8PlHbU4079SxbdojGZO7LZhK4QpHyBXGE6tuwANk7qA0nJ+6b92qkugxpAUQ0oUIBfw1woSLFe9YHRvX9abgruS9D/pNE/bXZx7o2IMHyhyZsf4pxp45ly3wcyNwXvxlSvhj+r+pbvSBVn2mQ+rTB/QrqH02ZT4ED1e1U71vvmt6yYMaDEvbVu363GaCvqY5dSDXm1HPt+2euP8z5iHx/Akj1YjhKdZV4dOWt1K7zE/bTn758QBIFgaEEdtOGU71vXc+vFesM1ZlFtpvqnP+Rlc9E6rusrQ2Ots9tWRYP6PvFUNL2Uh1M5Bf1uQp/nVBq2UUNS5nsPLbUjtKuuRFIuVvc7+FvKdYtSO9paos/saeaNIf69L9+wj6ksqCea19XTqTnsvggmIsUKV4IvtTivStQfG6i/trsmxX0lya2LbCTupf6bJffqc4hdpGPj5S/QvTXbCn+N43XcfD4Rnq8TwKQfizHxzXm/twmALskfIPt1eObKXZT3gUY84IZretPE5vGNob1EYgU+KzWH70mU9360rSPimzXrKv7O9kfK1L1ZVSP36+3m7VRkeuRAKQfz9G4xt7ObQLwzkRvstNVj4/SraX4YCfvsYh94Xj9V9XSadrZrMBm6tllihSv58k63qV6+zwuwL/1cVamvnxG9Q5VSADyvD4nX6+z/D23CcBv9G6YBWxynWcO9a6K2O4BifruywNTEBha4M1qwOT7MtXfPkPgNYqcicADVX/q4xnG+3+16t9aMVQhAcj3+hwf51nuz2UCcEu9E2bBmlznBNXjYwlqK97NmOJTkw8q5MqAtY1+e+31Uea5PjmP3vO+eI73eHkyS1FuoEp2VeTY3T9q8+jWCf+QhQQgzXwzGs+Ut3OZAKQ6GO4JQ76rIrft3ZspXki7RLaD1RFIIbCnKknxel6qDn+a/pHCewX886qrKELLRlrwyYqDFU4oltpWiud/ru0M/RUlCUA/Yz3L66WXBKDLm0Sv1+zla9rC7pFbuVTr30RxZWQ9Q62+nTbsCwTFlteqgr1jK2F9BBIIHKg6npqgni5VnKuFj1ecrThnxe15uvVXBjdTeG+bbzdXbKvo83+h23EXxRmKIYsTAF87JLbYmvJPgQ1012eMxJQHa+VvxlRQ27oGS7H7+9DaOj6lvT6AcZascXwdJ1MUBEoQWEONOEIx/vqc1/v+em7nEgZFbUi1B6CQ7hTTjJ+pJbGv7172APj7rlKKd8OtlaAxLUx8hyVwuIfq6PNTTYImU0WjAlepX49UnNho/7p0y78c+MMuK7AsArkESkoANk7QSWddX09Qz9BVpEgAvBtq06E7wvYRWCFwgW799Z5v57V8Wh1//7x2nn6XJ1BSAuA9ALHlV6rA3/nVXr6nDvhKarHFx0JQEChFwHsAHqXwbvB5K8eow8+Zt07T37IFSkoAUuwBOKVs7uDW+UDG84OXXnhB7wWgIFCSgI8FeHZJDeqhLT/RNnZVXN7DttgEAsECJSUAKfYA+GjfVkqKvpAAtPJqaKsfB6o7z1LUeqZOl9H4Ly18f4VPL6QgUJRASQlAij0ALez+H71AUvSFBGCkyW1pAh9Tg+6j+GNpDUvYnr1V1+MVVySsk6oQSCZQUgLAHoCVh5U9ACt78Fd7AkeqSz4f/vDGuuZjHJ6heK3CByZTEChSoLUEIMVFLUoZqBR9uVEpnaEdCCwg4GNd/P34uxZ4vraHL1KDfRGXT9TWcNo7fwIlJQA+8C223DS2goLWT9EXX3GMgkDpAteoga9Q/B/FJaU3dpH2/UDP+fobPouHgkDxAiUlAGcl0PKlPVspKfqSwrQVT/pRvsAX1MQdFV8uv6krtdA/PvYIxX0Vv1vpGf5AoGCBkhKAMxM43TxBHaVUkaIvJACljCbtCBX4vRb0ZLqD4iuhKw20nC9q9CLFHRS1JS0DkbHZkgRKSgBSTFYpJs1SxidFX1KYluJBO+ZLwBfO2UPhgwS/WljXfWnj9ypuo3i/Yh4vbKRuUxBIJ+BzZWN/QKGV3W83loWvBBjj4fVjf5FKVVAQKEJglAjEvCdi1z1NEj5Y8dZFiMQ3gh8DijecVsPP9GDsa223aRW3/Ng2CdCMvmUDSI9PYHFuAw50AYFJAe9uf5XCpw5eqYj9R7vU+v7J3n0Ud1e09uNaJAAa1AyFBGAG1HW1zlJvxpDn/32GbZe2ymcTWHgXKgWBlgVuqM49RLGv4reKkP8PIcv4IlwfUPhCRa1N+urSdYUE4DqKpHeqSQBWS9rtuMou1uo+FTD23PWHqg6/eWstq6rhKXb/lPT9v/vE1xFpX5GeyPwJeJ7LZer8YSvCDrdQPFDhvYAbKPxV2ihGf3vS89djpytOUfxhxa3vj+JPuk9BoHmBkhIAY/9C4VNpYsouWnltRa3nE99Tbfc/q9hyVGwFEet7wn+ywn3xd7febbuGgpJWwBOVx/loxZcUv1TMc/Hu+k8GAPjgZycBFAQQKEjgRWrL3xPE8wrqU9emHJSg/zb0xDtEuZ02+nNFinGkjnDHq2W+t4JESwiUIAG+Aghi6rxQNV8BdO5Z5hW2UP0p/ul797e/H6ytbKsG+6posQZ/HKjjj9V2/ZOnse1n/dkNj5N/iqtIDvQSYrM9CpAA5MGuJgHwrrCSyqlqjP+BxRafQ1/jwYBvUbtTjMlXYgFnWP9WWse/8LZ8hnVZJZ3Adqrqw+mqoyYEEGhVIMVkk9om1RW1fG3x9VI3LmN9d1Pdj0hUfyrD0Ob4dfQphY+9oAwv8Cg14UnDN4MWIIAAAt0E/N11ql3A7+626cGW9gR6RKJ+/6/q6ft74Aclanuqcaeea49o17BQEFhQgK8AFqSJeoKvACL4fFTzmRHrj6/6Uv3xmPEHCr3/DrVr50Rt+4bq8aVK+yz+ARdKWQJbqDk3KatJtAYBBEoSKPErAPscmghpFdXjXdPbJ6ovRzU+XW6vhBX3vfvfTd8hYfupKp0A45LOkpoQaE6g1ATAl95M9QMbPhvAk+JGBY7eTmrTRxO2y3tOUiVPXZp1hy4Ls2xvAoxLb9RsCIH6BEpNAE4WZcqJcXPVd4jC33mVUrZWQ9ymNRM26I2qy6fh9V1S9qHvtre8Pcal5dGlbwhECpSaALhbb1ZcFtm/8dV9VTofX3Cn8QcHuu+jtI9U+HTFVOW3qujAVJVRDwIIIIBA2wIlJwDniH7fxPxbqr6fKvy9+xDFl8j1AX9fVKyTuAH+hTRfRIiCAAIIIIDAkgIlJwBu/DsVFyzZi24LrKXFD1Lsr0g9CS/Wks305LcVr1hsoRmf+5HW++qM67IaAggggMAcCpSeAPic9rdlGhf/XsApilcqYn+BcLEmbqIn91OcpLjfYgtGPJcjqYhoDqsigAACCJQuUHoCYD9Pnv6VrxzF50m/XeGfBPU1A7x3IFXZWBW9V+EDGp+vyHVxHn+d4AtPUBBAAAEEEAgWqCEBuEK9eaYi5/fbG6n+9yjOU/iUwX9T3FLRtfgAQ38X76v6OWl5iWK5Ilfx1yMvz1U59SKAAAIItCuwWiVd+5ba6YnOn6hzFl/L/uErwts5XnG04mzFOWO3dvMR/KPwbn6fZeDbvop//vVfFf4ag4IAAggggEAngVoSAHdqH8UdFXsq+irbaEOOEou/svheiQ2bsU07ab3jZly3xdU+oE49s8WO0ScEEChDoKYEwGLeNb+14h7+Y46LL5LkCaKlcpU64697KNcK5PzKC2MEEEAgyW/P98l4pTb2SMUZfW60sG35lD8fVEhBAAEEEEBgZoEaDgKc7Ny5emAPxeWTT8zB36epj49WpPqdhDkgo4sIIIAAAtMEakwA3A8fmPckhfcIzEv5szrqAxTPn5cO008EEEAAgXwCtSYAFvmS4r4KH53fevm1OnhXBQfJtT7S9A8BBBDoSaDmBMBEvq7/jopf+o9Gy1fULx/0yOl+jQ4w3UIAAQSGEKg9AbDZmYqdFQf7j8bK3urPIxSXNNYvuoMAAgggMLBACwmACX1A4BMVvgrf3xS1F/fn8YrXKv5ee2doPwIIIIBAeQKtJAAj2Xfojg+Uu3j0QIW3PtL/PorPV9h2mowAAgggUIlAawmA2b+u2FbxaUVNn54vUnv9q363UxyloCCAAAIIIJBNoMUEwFi+UNBTFHdT+MI5JRefyvhuxZaKdym4Gp4QKAgggAACeQVaTQBGaj47wAcI+uI5J48eLOTWxyocpLitwj90dKGCggACCCCAQC8CrScAI0RfM8A/6vMYhb8iGPI6677mvX9yeAfFUxWnKygIIIAAAgj0KlDbjwHF4PjyuV9cEf7ZXn9F8DSFP4HnLj4o8RuKQxWHKWo+SFHNpyCAAAII1C4wTwnA+FidpT/eviLurltfUdAX23HcVJGinK1K/Enfk/73Ff7kT0EAAQQQQKAIgXlNAMbxf6Y/HKOyle44EfABhJsqNlDceMWt76+l8Pf35yk8yU+LU/X4sYqazkJQcykIIIAAAvMiQAJw/ZE+UQ85fIDetLJcD/rrhCGPI5jWLh5DAAEEEEAgWIAEIJjqugU5Te86Cu4ggAACCNQqMC9nAdQ6PrQbAQQQQACBLAIkAFlYqRQBBBBAAIGyBUgAyh4fWocAAggggEAWARKALKxUigACCCCAQNkCJABljw+tQwABBBBAIIsACUAWVipFAAEEEECgbAESgLLHh9YhgAACCCCQRYAEIAsrlSKAAAIIIFC2AAlA2eND6xBAAAEEEMgiQAKQhZVKEUAAAQQQKFuABKDs8aF1CCCAAAIIZBEgAcjCSqUIIIAAAgiULUACUPb40DoEEEAAAQSyCJAAZGGlUgQQQAABBMoWIAEoe3xoHQIIIIAAAlkESACysFIpAggggAACZQuQAJQ9PrQOAQQQQACBLAIkAFlYqRQBBBBAAIGyBUgAyh4fWocAAggggEAWARKALKxUigACCCCAQNkCJABljw+tQwABBBBAIIsACUAWVipFAAEEEECgbAESgLLHh9YhgAACCCCQRYAEIAsrlSKAAAIIIFC2AAlA2eND6xBAAAEEEMgiQAKQhZVKEUAAAQQQKFuABKDs8aF1CCCAAAIIZBEgAcjCSqUIIIAAAgiULUACUPb40DoEEEAAAQSyCJAAZGGlUgQQQAABBMoWIAEoe3xoHQIIIIAAAlkESACysFIpAggggAACZQuQAJQ9PrQOAQQQQACBLAIkAFlYqRQBBBBAAIGyBUgAyh4fWocAAggggEAWARKALKxUigACCCCAQNkCJABljw+tQwABBBBAIIsACUAWVipFAAEEEECgbAESgLLHh9YhgAACCCCQRYAEIAsrlSKAAAIIIFC2AAlA2eND6xBAAAEEEMgiQAKQhZVKEUAAAQQQKFuABKDs8aF1CCCAAAIIZBEgAcjCSqUIIIAAAgiULUACUPb40DoEEEAAAQSyCJAAZGGlUgQQQAABBMoWIAEoe3xoHQIIIIAAAlkESACysFIpAggggAACZQuQAJQ9PrQOAQQQQACBLAKrZamVShFAoGWBtdS5uyp2UNxFcQvFKgpKOoFLVdWxiqMUv1CcoaAgkFSABCApJ5Uh0LzALurhJxVbKCh5BR6yovprdPsOxX8qrlrxGDcIRAvwFUA0IRUgMBcCq6qX71McrthCQelPwPavURyp2Ka/zbKl1gVIAFofYfqHQBqBV6qaFyrY1Z/Gc5Za7qiVDlH4KxgKAtECJADRhFSAQPMCnnje2Hwv6+jg1mrm3nU0lVaWLkACUPoI0T4Ehhc4QE1YY/hm0IIVAi/S7XZoIBArQAIQK8j6CLQtsFzd26ntLlbXO38N8y/VtZoGFydAAlDckNAgBIoSuJNaw9lCRQ3JPxrj0y8pCEQJkABE8bEyAs0L3Ln5HtbZQcalznErqtUkAEUNB41BoDiB9YtrEQ2yAOPC6yBagAQgmpAKEEAAAQQQqE+ABKC+MaPFCCCAAAIIRAuQAEQTUgECCCCAAAL1CZAA1DdmtBgBBBBAAIFoARKAaEIqQAABBBBAoD4BEoD6xowWI4AAAgggEC1AAhBNSAUIIIAAAgjUJ8AVvuobM1qMQG0C31KDP1RbozO291aq+70Z66dqBIIESACCmFgIAQQiBE7VuodGrN/aqtu31iH6U6cAXwHUOW60GgEEEEAAgSgBEoAoPlZGAAEEEECgTgESgDrHjVYjgAACCCAQJUACEMXHyggggAACCNQpQAJQ57jRagQQQAABBKIESACi+FgZAQQQQACBOgVIAOocN1qNAAIIIIBAlAAJQBQfKyOAAAIIIFCnAAlAneNGqxFAAAEEEIgSIAGI4mNlBBBAAAEE6hQgAahz3Gg1AggggAACUQIkAFF8rIwAAggggECdAiQAdY4brUYAAQQQQCBKgAQgio+VEUAAAQQQqFOABKDOcaPVCCCAAAIIRAmsFrV2/Mo3VRV3Ueyg2EpBQiKEhOUq1fVrxdGKYxSXKigIIIAAAggsGyoB8MT/QcVjGIPeBK7Wlt6l+A+FEwMKAggggMAcCwzxiXsPef9GweTf7wvPyd6rFb9U3LHfTbM1BBBAAIHSBPpOAHYSwBcVG5UGMUft2U59/bbCe2EoCCCAAAJzKtBnArBcxgcqVp1T65K6vbEa8+GSGkRbEEAAAQT6FegzAfDu59v12z22tojAo/TcIxd5nqcQQAABBBoW6DMB2K1hx1q7tmutDafdCCCAAAJxAn0lAKurmXeKayprZxDw6ZcUBBBAAIE5FOgrAfCBZ2vOoW/pXfbZAEOdClq6De1DAAEEmhboKwHgqP8yX0Y+MHPtMptGqxBAAAEEcgr0lQDk7AN1I4AAAggggEBHARKAjmAsjgACCCCAQAsCJAAtjCJ9QAABBBBAoKMACUBHMBZHAAEEEECgBQESgBZGkT4ggAACCCDQUYAEoCMYiyOAAAIIINCCAAlAC6NIHxBAAAEEEOgoUNNFYE5T3/bt2L/WF9+n9Q7SPwQQQACBPAI1JQDniIAEYOXXAQnAyh78hQACCCAQKMBXAIFQLIYAAggggEBLAiQALY0mfUEAAQQQQCBQgAQgEIrFEEAAAQQQaEmABKCl0aQvCCCAAAIIBAqQAARCsRgCCCCAAAItCZAAtDSa9AUBBBBAAIFAARKAQCgWQwABBBBAoCUBEoCWRpO+IIAAAgggEChAAhAIxWIIIIAAAgi0JEAC0NJo0hcEEEAAAQQCBUgAAqFYDAEEEEAAgZYESABaGk36ggACCCCAQKAACUAgFIshgAACCCDQkgAJQEujSV8QQAABBBAIFCABCIRiMQQQQAABBFoSIAFoaTTpCwIIIIAAAoECJACBUCyGAAIIIIBASwIkAC2NJn1BAAEEEEAgUIAEIBCKxRBAAAEEEGhJgASgpdGkLwgggAACCAQKkAAEQrEYAggggAACLQmQALQ0mvQFAQQQQACBQAESgEAoFkMAAQQQQKAlARKAlkaTviCAAAIIIBAoQAIQCMViCCCAAAIItCRAAtDSaNIXBBBAAAEEAgVIAAKhWAwBBBBAAIGWBEgAWhpN+oIAAggggECgAAlAIBSLIYAAAggg0JIACUBLo0lfEEAAAQQQCBQgAQiEYjEEEEAAAQRaEiABaGk06QsCCCCAAAKBAiQAgVAshgACCCCAQEsCJAAtjSZ9QQABBBBAIFCABCAQisUQQAABBBBoSYAEoKXRpC8IIIAAAggECpAABEKxGAIIIIAAAi0JkAC0NJr0BQEEEEAAgUABEoBAKBZDAAEEEECgJQESgJZGk74ggAACCCAQKEACEAjFYggggAACCLQkQALQ0mjSFwQQQAABBAIFSAACoVgMAQQQQACBlgRIAFoaTfqCAAIIIIBAoAAJQCAUiyGAAAIIINCSAAlAS6NJXxBAAAEEEAgUIAEIhGIxBBBAAAEEWhIgAWhpNOkLAggggAACgQIkAIFQLIYAAggggEBLAiQALY0mfUEAAQQQQCBQgAQgEIrFEEAAAQQQaEmABKCl0aQvCCCAAAIIBAqQAARCsRgCCCCAAAItCZAAtDSa9AUBBBBAAIFAARKAQCgWQwABBBBAoCUBEoCWRpO+IIAAAgggEChAAhAIxWIIIIAAAgi0JEAC0NJo0hcEEEAAAQQCBUgAAqFYDAEEEEAAgZYESABaGk36ggACCCCAQKAACUAgFIshgAACCCDQkgAJQEujSV8QQAABBBAIFCABCIRiMQQQQAABBFoSIAFoaTTpCwIIIIAAAoECJACBUCyGAAIIIIBASwIkAC2NJn1BAAEEEEAgUIAEIBCKxRBAAAEEEGhJgASgpdGkLwgggAACCAQKkAAEQrEYAggggAACLQmQALQ0mvQFAQQQQACBQAESgEAoFkMAAQQQQKAlARKAlkaTviCAAAIIIBAoQAIQCMViCCCAAAIItCRAAtDSaNIXBBBAAAEEAgVIAAKhWAwBBBBAAIGWBEgAWhpN+oIAAggggECgAAlAIBSLIYAAAggg0JIACUBLo0lfEEAAAQQQCBQgAQiEYjEEEEAAAQRaEiABaGk06QsCCCCAAAKBAiQAgVAshgACCCCAQEsCJAAtjSZ9QQABBBBAIFCABCAQisUQQAABBBBoSYAEoKXRpC8IIIAAAggECpAABEKxGAIIIIAAAi0JkAC0NJr0BQEEEEAAgUABEoBAKBZDAAEEEECgJQESgJZGk74ggAACCCAQKEACEAjFYggggAACCLQkQALQ0mjSFwQQQAABBAIFSAACoVgMAQQQQACBlgRIAFoaTfqCAAIIIIBAoAAJQCAUiyGAAAIIINCSAAlAS6NJXxBAAAEEEAgUIAEIhGIxBBBAAAEEWhIgAWhpNOkLAggggAACgQIkAIFQLIYAAggggEBLAiQALY0mfUEAAQQQQCBQgAQgEIrFEEAAAQQQaEmABKCl0aQvCCCAAAIIBAqQAARCsRgCCCCAAAItCZAAtDSa9AUBBBBAAIFAARKAQCgWQwABBBBAoCUBEoCWRpO+IIAAAgggEChAAhAIxWIIIIAAAgi0JEAC0NJo0hcEEEAAAQQCBUgAAqFYDAEEEEAAgZYESABaGk36ggACCCCAQKAACUAgFIshgAACCCDQkgAJQEujSV8QQAABBBAIFCABCIRiMQQQQAABBFoSIAFoaTTpCwIIIIAAAoECJACBUCyGAAIIIIBASwIkAC2NJn1BAAEEEEAgUIAEIBCKxRBAAAEEEGhJgASgpdGkLwgggAACCAQKkAAEQrEYAggggAACLQmQALQ0mvQFAQQQQACBQAESgEAoFkMAAQQQQKAlARKAlkaTviCAAAIIIBAoQAIQCMViCCCAAAIItCRAAtDSaNIXBBBAAAEEAgVIAAKhWAwBBBBAAIGWBEgAWhpN+oIAAggggECgAAlAIBSLIYAAAggg0JIACUBLo0lfEEAAAQQQCBQgAQiEYjEEEEAAAQRaEiABaGk06QsCCCCAAAKBAiQAgVAshgACCCCAQEsCJAAtjSZ9QQABBBBAIFCABCAQisUQQAABBBBoSYAEoKXRpC8IIIAAAggECpAABEKxGAIIIIAAAi0JkAC0NJr0BQEEEEAAgUABEoBAKBZDAAEEEECgJQESgJZGk74ggAACCCAQKEACEAjFYggggAACCLQkQALQ0mjSFwQQQAABBAIFSAACoVgMAQQQQACBlgRIAFoaTfqCAAIIIIBAoAAJQCAUiyGAAAIIINCSAAlAS6NJXxBAAAEEEAgUIAEIhGIxBBBAAAEEWhIgAWhpNOkLAggggAACgQIkAIFQLIYAAggggEBLAiQALY0mfUEAAQQQQCBQgAQgEIrFEEAAAQQQaEmABKCl0aQvCCCAAAIIBAqQAARCsRgCCCCAAAItCZAAtDSa9AUBBBBAAIFAARKAQCgWQwABBBBAoCWB1dSZdRW5E4EbJUBbVXWsn6AeqlhZYL2V/5zprxSvn3W0Zcb3n/xr/PPuzPeWJzB1HbHFfWFs/6no13ps8Xsu1jTFe9/9iG1HrEVp63uuii2eM3O7/m0VbeRUxS0VFAQQQAABBBCYD4HTUnxymw8qeokAAggggEBDAiQADQ0mXUEAAQQQQCBUgAQgVIrlEEAAAQQQaEiABKChwaQrCCCAAAIIhAqQAIRKsRwCCCCAAAINCZAANDSYdAUBBBBAAIFQARLwnEWbAAAAlElEQVSAUCmWQwABBBBAoCEBEoCGBpOuIIAAAgggECpAAhAqxXIIIIAAAgg0JEAC0NBg0hUEEEAAAQRCBUgAQqVYDgEEEEAAgYYESAAaGky6ggACCCCAQKgACUCoFMshgAACCCDQkAAJQEODSVcQQAABBBAIFSABCJViOQQQQAABBBoSIAFoaDDpCgIIIIAAAqEC/x8510ScmGZRlwAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default AssesmentLogo;
